const { Telegram } = require("telegraf");
const telegraf = new Telegram(process.env.TELEGRAM_BOT_TOKEN);

module.exports = async (req, res) => {
  const { message } = req.body;
  const chatId = message.chat.id;
  const text = message.text;

  await telegraf.sendMessage(chatId, `You said: ${text}`);

  res.status(200).send("OK");
};
