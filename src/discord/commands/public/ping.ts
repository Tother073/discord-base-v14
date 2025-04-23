import { createCommand } from "#base";
import { menus } from "#menus";
import { ApplicationCommandType } from "discord.js";









createCommand({
    name: "ping",
    description: "Ping",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const sent = await interaction.reply({ content: "Calculando latência...", fetchReply: true, flags });
        const latency = sent.createdTimestamp - interaction.createdTimestamp;

        await interaction.editReply(menus.ping.main(latency));
    }
});