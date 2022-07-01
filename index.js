const { Telegraf } = require('telegraf')

const bot = new Telegraf('5585041480:AAH5sYGILMZrdAMguEUDZaGDfEdsPQRWPLM')
bot.start((ctx) => ctx.reply('Привет всем!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
