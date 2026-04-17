import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
] as const;

function missingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const missing = missingEnv();
  if (missing.length > 0) {
    return { statusCode: 500, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: `Missing environment variables: ${missing.join(", ")}` }) };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const lines = [
      "Nieuwe aanvraag via STROOQ website",
      "",
      `Pakket of optie: ${payload.selectedPlan || "Niet ingevuld"}`,
      `Indicatie prijs: ${payload.selectedPlanPrice || "Niet ingevuld"}`,
      "",
      `Bedrijfsnaam: ${payload.companyName || "Niet ingevuld"}`,
      `Contactpersoon: ${payload.contactName || "Niet ingevuld"}`,
      `E-mailadres: ${payload.emailAddress || "Niet ingevuld"}`,
      `Telefoonnummer: ${payload.phoneNumber || "Niet ingevuld"}`,
      `KvK-nummer: ${payload.kvkNumber || "Niet ingevuld"}`,
      `Aantal medewerkers: ${payload.employeeCount || "Niet ingevuld"}`,
      `Verloningsfrequentie: ${payload.payrollFrequency || "Niet ingevuld"}`,
      `Gewenste startdatum: ${payload.preferredStartDate || "Niet ingevuld"}`,
      `Huidige salarisverwerker: ${payload.currentProvider || "Niet ingevuld"}`,
      `Huidig payroll software: ${payload.currentPayrollSoftware || "Niet ingevuld"}`,
      `Provider urenregistratie: ${payload.timeTrackingProvider || "Niet ingevuld"}`,
      `Aanlevermethode uren: ${payload.hoursDeliveryMethod || "Niet ingevuld"}`,
      `Opmerkingen / bijzonderheden: ${payload.notes || "Niet ingevuld"}`,
      "",
      `Loonaangifte: ${payload.includeLoonaangifte ? "Ja" : "Nee"}`,
      `Pensioenaangifte: ${payload.includePensioen ? "Ja" : "Nee"}`,
      `Onboarding indicatie: ${payload.onboardingIndicatie ?? "Niet ingevuld"}`,
      `Losse loonstroken indicatie: ${payload.losseLoonstrokenIndicatie ?? 0}`,
      `Loonaangifte indicatie: ${payload.loonaangifteIndicatie ?? 0}`,
      `Pensioen indicatie: ${payload.pensioenIndicatie ?? 0}`,
      "",
      `Offerte-akkoord: ${payload.acceptedQuote ? "Ja" : "Nee"}`,
      `Privacy en voorwaarden akkoord: ${payload.acceptedTerms ? "Ja" : "Nee"}`,
      `Ingezonden op: ${payload.submittedAt || new Date().toISOString()}`,
      `Bron: ${payload.source || "strooq-website"}`,
    ];

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: payload.emailAddress || process.env.CONTACT_TO_EMAIL,
      subject: `Nieuwe aanvraag STROOQ - ${payload.companyName || "Onbekend bedrijf"}`,
      text: lines.join("\n"),
    });

    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    console.error("Failed to send contact email", error);
    return { statusCode: 500, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "De aanvraag kon niet worden verzonden. Controleer SMTP-instellingen en probeer het opnieuw." }) };
  }
};
