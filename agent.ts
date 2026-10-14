export default async function({ request, pollinations }) {
  const body = await request.json();

  return await pollinations('/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai',
      messages: [
        { role: 'system', content: 'Ты Мужицки персональный AI-ассистент.' },
        ...(body.messages || [])
      ]
    })
  });
}
