import {config as loadDotenv} from "dotenv"
import configureTelegram from "./telegram.js"
import configureDiscord from "./discord.js"

loadDotenv()
configureTelegram(process.env.TG_TOKEN)
configureDiscord(process.env.DS_TOKEN, process.env.DS_PREFIX)