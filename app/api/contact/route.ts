import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const rawAdminEmails = process.env.ADMIN_EMAILS;

    if (!gmailUser || !gmailPass || !rawAdminEmails) {
      return NextResponse.json(
        { error: "Server missing email credentials" },
        { status: 500 },
      );
    }

    const { firstName, lastName, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const adminEmails = rawAdminEmails
      ? rawAdminEmails
          .split(",")
          .map((email) => email.trim())
          .filter(Boolean)
      : [gmailUser];

    const mailOptions = {
      from: `Pro Ambulance Web <${gmailUser}>`,
      to: adminEmails,
      subject: `[ข้อความใหม่จากเว็บ] คุณ ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #d97706; border-bottom: 2px solid #fef3c7; padding-bottom: 10px;">
            🚑 มีรายการติดต่อใหม่จากเว็บไซต์ Pro Ambulance
          </h2>
          <div style="line-height: 1.6; font-size: 15px;">
            <p><strong>ชื่อ-นามสกุล:</strong> ${firstName} ${lastName}</p>
            <p><strong>เบอร์โทรศัพท์:</strong> <a href="tel:${phone}" style="color: #d97706; font-weight: bold;">${phone}</a></p>
            <p><strong>อีเมลผู้ติดต่อ:</strong> ${email || "ไม่ได้ระบุ"}</p>

            <p style="margin-top: 15px;"><strong>ข้อความ / รายละเอียดเพิ่มเติม:</strong></p>
            <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 4px; font-size: 14px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 10px;">
            อีเมลฉบับนี้ส่งอัตโนมัติจากระบบแบบฟอร์มติดต่อหน้าเว็บไซต์ Pro Ambulance Service
          </p>
        </div>
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
