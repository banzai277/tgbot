const { Telegraf } = require('telegraf')

const bot = new Telegraf('5451090544:AAEkMXZg7lJ5Xz12mHfS6G-zLKOdA5_5M2U')
bot.start((ctx) => ctx.reply('Приветствую вас! Опишите какая у вас проблема?'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
