import { createResponder, ResponderType } from "#base";
import { menus } from "#menus";









createResponder({
    customId: "ping/:action",
    types: [ResponderType.Button], cache: "cached",
    async run(interaction, { action }) {
        
        switch (action) {
            case "refresh": {
                const latency = Date.now() - interaction.createdTimestamp;
                
                if (interaction.deferred || interaction.replied) {
                    await interaction.editReply(menus.ping.main(latency));
                    return;
                }

                await interaction.update(menus.ping.main(latency));
            }
        }

    },
});