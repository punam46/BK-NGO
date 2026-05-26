import sendEmail from './utils/sendEmail.js';

async function test() {
  try {
    await sendEmail({
      email: 'bktimesnashik@gmail.com', // sending to self to test
      subject: 'Test email from backend',
      message: 'This is a test message',
      html: '<h1>Test Email</h1><img src="cid:headerImage" />',
      data: {}
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Email sending failed:", error);
  }
}

test();
