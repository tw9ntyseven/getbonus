import { H3Event, readBody } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const { name, email, question } = await readBody(event);
  const { sendMail } = useNodeMailer()

  try {
    await sendMail({
      from: 'igetbonus@outlook.com',
      to: 'igetbonus@outlook.com',
      subject: 'Сообщение с сайта GETBONUS',
      html: `
        <h1>Имя: ${name}</h1>
        <h2>Почта для связи: ${email}</h2>
        <p>Вопрос: ${question}</p>
      `,
    });

    return { success: true, message: 'Письмо успешно отправлено!' };
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    return { success: false, message: 'Ошибка при отправке письма.' };
  }
});
