import { setupCreators } from "#base";
import { env } from "#settings";









export const { createCommand, createEvent, createResponder } = setupCreators({
    commands: {
        guilds: env.DEVELOPMENT_GUILD ? [env.DEVELOPMENT_GUILD] : []
    }
});