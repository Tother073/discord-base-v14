import { formatEmoji as discordFormatEmoji } from "discord.js";
import { icons } from "#settings";









export type IconsType = typeof icons;
export type IconKeys = `${keyof IconsType["animated"]}` | keyof IconsType["static"];
export type Icon = { name: string, id: string, animated: boolean, toString: () => string };
export type IconMap = Record<IconKeys, Icon>;

export const icon: IconMap = Object.assign({},
    Object.entries({ ...icons.animated, ...icons.static }).reduce((obj, [name, id]) => {
        const animated = Object.values(icons.animated).includes(id);
        function toString() {
            return discordFormatEmoji(id, animated)
        };

        obj[name as IconKeys] = { name, id, animated, toString };
        return obj;
    }, Object.create(null))
);