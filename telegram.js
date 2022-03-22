import commands from "./common/commands/index.js";
import {Telegraf} from "telegraf";

const configure = (token) => {
    const bot = new Telegraf(token)

    commands.commands.filter(i => i.supportTelegram).forEach(i => bot.command(i.name, async (ctx) => await i.processTelegram(bot, ctx)))

    console.log("Starting Telegram Bot")
    bot.launch()
}

export default configure