export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      message: '全項目を入力してください',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: '有効なメールアドレスを入力してください',
    })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.warn('RESEND_API_KEY is not set. Skipping email.')
    return { success: true, message: 'お問い合わせを受け付けました' }
  }

  await $fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: {
      from: 'contact@yurufuwaFE.dev',
      to: 'yurufuwafe@gmail.com',
      subject: `【お問い合わせ】${body.name}さんから`,
      text: `名前: ${body.name}\nメール: ${body.email}\n\n${body.message}`,
    },
  })

  return {
    success: true,
    message: 'お問い合わせを受け付けました',
  }
})
