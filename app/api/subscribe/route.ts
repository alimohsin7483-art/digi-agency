import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, business, service, message } = body;

    const apiKey = process.env.MAILERLITE_KEY;

    // Step 1 — Get group ID by name
    const groupRes = await fetch("https://connect.mailerlite.com/api/groups?limit=25", {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    const groupData = await groupRes.json();
    const group = groupData?.data?.find(
      (g: { id: string; name: string }) => g.name === "Strategy Call Lead"
    );

    // Step 2 — Add subscriber
    const subRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name,
          last_name: service,
          company: business,
          phone: message,
        },
        ...(group && { groups: [group.id] }),
      }),
    });

    if (!subRes.ok) {
      const err = await subRes.json();
      console.error("MailerLite error:", err);
      return NextResponse.json({ error: "MailerLite error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
