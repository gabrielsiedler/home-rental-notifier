import { twilioClient } from '../setup/twilio'

export const sendWhatsappMessage = async (source, { id, href, title }) => {
  const message = `Nova casa em ${source}.\n\n${id} - ${title}.\n\n${href}.`

  await twilioClient.messages.create({
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${process.env.TWILIO_TARGET_NUMBER}`,
    message,
  })
}
