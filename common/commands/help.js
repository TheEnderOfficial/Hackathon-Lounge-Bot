class HelpCommand {
    // Custom
    _process() {
        return "Тут должна быть помощь"
    }

    // Required
    name = "help"
    supportTelegram = true
    supportDiscord = true
    async processTelegram(bot, ctx) {
        await ctx.reply(this._process())
    }
    async processDiscord(bot, ctx) {
        await ctx.reply(this._process())
    }
}

export default new HelpCommand()