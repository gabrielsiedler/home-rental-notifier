import twilio from 'twilio'

let client

export const twilioSetup = async () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN

  client = await twilio(accountSid, authToken)
}

export const sendWhatsappMessage = async (body: string) => {
  const message = await client.messages.create({
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${process.env.TWILIO_TARGET_NUMBER}`,
    body,
  })

  console.log('message.sid', message.sid)
}
