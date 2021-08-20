import Client from "../Client/index";
import { Message } from "discord.js";

interface Run {
    (client:Client, message: Message, args: string[]);
}

export interface Command {
    name: string;
    description: string;
    default: boolean;
    aliases?: string[];
    run: Run
}