import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CareerApplicationRequest {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: string;
  coverLetter: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, position, resume, coverLetter }: CareerApplicationRequest = await req.json();

    console.log("Processing career application for:", name, position);

    // Validate required fields
    if (!name || !email || !phone || !position || !resume || !coverLetter) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert application into database
    const { data: application, error: dbError } = await supabase
      .from("career_applications")
      .insert({
        name,
        email,
        phone,
        position,
        resume_link: resume,
        cover_letter: coverLetter,
        status: "pending",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save application: ${dbError.message}`);
    }

    console.log("Application saved to database:", application.id);

    // Send confirmation email to applicant
    const applicantEmailResponse = await resend.emails.send({
      from: "Meta2140 Careers <onboarding@resend.dev>",
      to: [email],
      subject: "Application Received - Meta2140",
      html: `
        <h1>Thank you for your application, ${name}!</h1>
        <p>We have received your application for the position of <strong>${position}</strong>.</p>
        <p>Our team will review your application and get back to you within 5-7 business days.</p>
        <br>
        <h3>Application Details:</h3>
        <ul>
          <li><strong>Position:</strong> ${position}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Application ID:</strong> ${application.id}</li>
        </ul>
        <br>
        <p>If you have any questions, please don't hesitate to reach out.</p>
        <p>Best regards,<br>The Meta2140 Team</p>
      `,
    });

    console.log("Confirmation email sent to applicant:", applicantEmailResponse);

    // Send notification email to HR
    const hrEmailResponse = await resend.emails.send({
      from: "Meta2140 Careers <onboarding@resend.dev>",
      to: ["hr@meta2140.com"], // Replace with actual HR email
      subject: `New Application: ${position} - ${name}`,
      html: `
        <h1>New Career Application Received</h1>
        <h2>Applicant Information:</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Position:</strong> ${position}</li>
          <li><strong>Application ID:</strong> ${application.id}</li>
        </ul>
        <br>
        <h3>Resume/CV Link:</h3>
        <p><a href="${resume}" target="_blank">${resume}</a></p>
        <br>
        <h3>Cover Letter:</h3>
        <p style="white-space: pre-wrap;">${coverLetter}</p>
        <br>
        <p>Review this application in the backend database.</p>
      `,
    });

    console.log("Notification email sent to HR:", hrEmailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully",
        applicationId: application.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-career-application function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred processing your application" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
