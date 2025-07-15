const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: process.env.MC_HOST || 'localhost',
  port: parseInt(process.env.MC_PORT) || 25565,
  username: process.env.MC_USERNAME || 'bot'
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(message);
});

bot.on('spawn', () => {
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000);
});
