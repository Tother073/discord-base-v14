import { ButtonBuilder, ButtonStyle, type InteractionReplyOptions } from "discord.js";
import { createEmbed, createRow, brBuilder } from "@magicyan/discord";









export function mainMenu<R>(latency: number): R {
    const embed = createEmbed({
        description: brBuilder(
            `### 🏓 Pong!`,
            `Latência atual: \`${latency}ms\``
        ),
        color: latency <= 100 ? "Green" : latency <= 200 ? "Yellow" : "Red"
    });

    const components = [
        createRow(
            new ButtonBuilder({
                customId: "ping/refresh",
                emoji: "🔁",
                label: "Atualizar",
                style: ButtonStyle.Secondary
            })
        )
    ];

    return ({
        flags, embeds: [embed], components
    } satisfies InteractionReplyOptions) as R;
};