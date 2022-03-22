class StartCommand {
    // Custom
    _process(bot) {
        return `
            Всем привет, я ${bot.botInfo.first_name} ${bot.botInfo.last_name}.
            
            Что-бы узнать о командах бота используете: /help
            
            Репозиторий: https://github.com/TheEnderOfficial/Hackathon-Lounge-Bot
            Разработчик: @dmitriypshennikov https://github.com/TheEnderOfficial
        `
    }

    // Required
    name = "start"
    supportTelegram = true
    supportDiscord = false
    async processTelegram(bot, ctx) {
        await ctx.reply(this._process(bot))
    }
    async processDiscord(bot, ctx) {}
}

export default new StartCommand()