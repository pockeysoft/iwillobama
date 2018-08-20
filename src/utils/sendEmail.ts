import Mailgun from 'mailgun-js'

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: 'pockeysoft.com'
})

const sendEmail = (to: string, subject: string, html: string) => {
  const emailData = {
    from: 'pockeysoft@gmail.com',
    to,
    subject,
    html
  }
  return mailGunClient.messages().send(emailData)
}

export const sendVerificationEmail = (to: string, username: string, key: string) => {
  const emailSubject = `Hello! ${username}, please verify your email`
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`
  return sendEmail(to, emailSubject, emailBody)
}
