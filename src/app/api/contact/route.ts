import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  businessName: string;
  contact: string;
  needs: string;
  budget: string;
  timeline: string;
}

const isFilled = (value: string) => value && value.trim().length > 1;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const errors: Record<string, string> = {};

    if (!isFilled(payload.name)) errors.name = "Name is required";
    if (!isFilled(payload.businessName))
      errors.businessName = "Business name is required";
    if (!isFilled(payload.contact))
      errors.contact = "Contact information is required";
    if (!isFilled(payload.needs)) errors.needs = "Project details required";
    if (!isFilled(payload.budget)) errors.budget = "Budget is required";
    if (!isFilled(payload.timeline)) errors.timeline = "Timeline is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    console.log("New contact request:", payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 500 }
    );
  }
}
