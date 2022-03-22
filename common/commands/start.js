class StartCommand {
    // Custom
    _process() {
        return "Всем привет."
    }

    // Required
    name = "start"
    supportTelegram = true
    supportDiscord = false
    async processTelegram(bot, ctx) {
        await ctx.reply(this._process())
    }
    async processDiscord(bot, ctx) {}
}

export default new StartCommand()