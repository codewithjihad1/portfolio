import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
        return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email to portfolio owner
    await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:12px;">
                <h2 style="color:#16a34a;margin-bottom:4px;">New Contact Message</h2>
                <p style="color:#64748b;font-size:14px;margin-top:0;">From your portfolio contact form</p>
                <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
                <table style="width:100%;border-collapse:collapse;">
                    <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;width:100px;font-weight:600;">NAME</td>
                        <td style="padding:8px 0;color:#0f172a;font-size:14px;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;font-weight:600;">EMAIL</td>
                        <td style="padding:8px 0;color:#0f172a;font-size:14px;">
                            <a href="mailto:${email}" style="color:#16a34a;">${email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;font-weight:600;">SUBJECT</td>
                        <td style="padding:8px 0;color:#0f172a;font-size:14px;">${subject}</td>
                    </tr>
                </table>
                <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
                <p style="color:#64748b;font-size:13px;font-weight:600;margin-bottom:8px;">MESSAGE</p>
                <p style="color:#0f172a;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
            </div>
        `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
        from: `"MD Jihad Hossain" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}!`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:12px;">
                <h2 style="color:#16a34a;">Hi ${name}, thanks for your message!</h2>
                <p style="color:#475569;line-height:1.7;">
                    I've received your message and will get back to you within 24 hours.
                </p>
                <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin:24px 0;">
                    <p style="color:#64748b;font-size:13px;font-weight:600;margin:0 0 6px;">YOUR MESSAGE</p>
                    <p style="color:#0f172a;font-size:14px;margin:0;white-space:pre-wrap;">${message}</p>
                </div>
                <p style="color:#475569;">Best regards,<br /><strong>MD Jihad Hossain</strong><br />Frontend Developer</p>
            </div>
        `,
    });

    return Response.json({ success: true });
}
