/**
 * Sends a message to a Telegram chat via a bot.
 * Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables.
 */
export async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn('Telegram credentials missing. Skipping notification.');
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Telegram notification error:', error);
    return false;
  }
}

/**
 * Formats form data into a readable Telegram message.
 */
export function formatTelegramMessage(title: string, data: Record<string, any>) {
  let message = `<b>🚨 ${title} 🚨</b>\n\n`;
  
  for (const [key, value] of Object.entries(data)) {
    if (value) {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      message += `<b>${label}:</b> ${value}\n`;
    }
  }
  
  message += `\n<i>Sent from locksmithbedstuy.com</i>`;
  return message;
}
