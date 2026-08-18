import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "genamb.th@gmail.com",
      subject: `[ข้อความใหม่จากเว็บ] คุณ ${firstName} ${lastName}`,
      html: `
        <h2>มีรายการติดต่อใหม่จากเว็บไซต์ Pro Ambulance</h2>
        <p><strong>ชื่อ-นามสกุล:</strong> ${firstName} ${lastName}</p>
        <p><strong>เบอร์โทรศัพท์:</strong> ${phone}</p>
        <p><strong>อีเมลผู้ติดต่อ:</strong> ${email || "ไม่ได้ระบุ"}</p>
        <p><strong>ข้อความ:</strong></p>
        <p style="background: #f4f4f4; p-3; border-radius: 8px;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "ส่งอีเมลสำเร็จ" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการส่งอีเมล" },
      { status: 500 },
    );
  }
}
