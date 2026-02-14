export const websiteContactTemplate = ({
  name,
  email,
  phone,
  serviceType,
  message,
}: {
  name: string;
  email: string | null;
  phone: string | null;
  serviceType: string;
  message: string;
}) => {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Contact Form Submission</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f9fafb;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        color: white;
        padding: 40px 20px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: bold;
      }
      .header p {
        margin: 8px 0 0 0;
        font-size: 14px;
        opacity: 0.9;
      }
      .content {
        padding: 40px 30px;
      }
      .greeting {
        font-size: 16px;
        margin-bottom: 30px;
        color: #1f2937;
      }
      .info-section {
        background-color: #f3f4f6;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
      }
      .info-row {
        display: flex;
        margin-bottom: 12px;
      }
      .info-row:last-child {
        margin-bottom: 0;
      }
      .info-label {
        font-weight: 600;
        color: #1e40af;
        width: 140px;
        flex-shrink: 0;
      }
      .info-value {
        color: #4b5563;
        flex: 1;
        word-break: break-word;
      }
      .message-section {
        background-color: #eff6ff;
        border-left: 4px solid #1e40af;
        border-radius: 4px;
        padding: 20px;
        margin-bottom: 20px;
      }
      .message-label {
        font-weight: 600;
        color: #1e40af;
        margin-bottom: 10px;
        font-size: 14px;
      }
      .message-content {
        color: #4b5563;
        line-height: 1.7;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .footer {
        background-color: #f9fafb;
        border-top: 1px solid #e5e7eb;
        padding: 20px 30px;
        text-align: center;
        font-size: 12px;
        color: #6b7280;
      }
    </style>
</head>
<body>
    <div class="container">
      <div class="header">
        <h1>New Contact Form Submission</h1>
        <p>You've received a new message from your website contact form.</p>
      </div>
      <div class="content">
        <div class="greeting">
          Hello,
        </div>
        <div class="info-section">
          <div class="info-row">
            <div class="info-label">Name:</div>
            <div class="info-value">${name}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Email:</div>
            <div class="info-value">${email}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Phone:</div>
            <div class="info-value">${phone}</div>
          </div>
        </div>
        <div class="message-section">
          <div class="message-label">Message:</div>
          <div class="message-content">${message}</div>
        </div>
        <div class="info-section">
          <div class="info-row">
            <div class="info-label">ServiceType type:</div>
            <div class="info-value">${serviceType}</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>Thank you for using our service!</p>
        <p>&copy; ${new Date().getFullYear()} DeployBoats. All rights reserved.</p>
      </div>
    </div>
</body>
</html>`;
};
