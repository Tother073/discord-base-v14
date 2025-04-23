import { settings } from "#settings";
import { createEmbed } from "@magicyan/discord";
import { EmbedBuilder, InteractionReplyOptions, MessagePayload } from "discord.js";









export enum NotifyType {
    Success = "success",
    Error = "error"
};

export type NotifyMaps = Record<NotifyType, string>;

export type NotifyNames = Lowercase<keyof typeof NotifyType>;

type Options = InteractionReplyOptions | MessagePayload;

export type Notify<O extends Options> = {
    withResponse: boolean;
    flags: ["Ephemeral"];
    embeds: EmbedBuilder[];
    options: O;
};

export type NotifyMap = Record<NotifyType, <O extends Options>(
    text: string, options: O
) => Notify<O>>;


const notifyMaps: NotifyMaps = {
    error: settings.colors.danger,
    success: settings.colors.success
};

export const notify: NotifyMap = Object.assign({},
    Object.entries(notifyMaps).reduce((obj, [key, value]) => ({
        ...obj,
        [key](text: string, options: Options) {
            const embed = createEmbed({ color: value, description: text });

            if (options && "embeds" in options && Array.isArray(options.embeds)) {
                options.embeds.unshift(embed);
            }

            const defaults = Object.assign({ withResponse: true, embeds: [embed] });

            return Object.assign(defaults, options);
        }
    }), {} as NotifyMap)
);