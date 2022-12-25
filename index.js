// import TelegramBot from "node-telegram-bot-api";
const TelegramBot = require("node-telegram-bot-api");

// TODO: .env
const token = process.env.TOKEN;
const webAppUrl = process.env.WEBAPPURL;
const bot = new TelegramBot(token, { polling: true });

// bot.onNext(/\/echo (.+_)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];
//   bot.sendMessage(chatId, resp);
// });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      "There will be button at the bottom, please fill the form",
      {
        reply_markup: {
          // keyboard: [[{ text: "Fill the form" }]],
          inline_keyboard: [
            [{ text: "Fill the form", web_app: { url: webAppUrl } }],
          ],
        },
      }
    );
  }
  // bot.sendMessage(chatId, "Hello there!dewgbefbn");
});
