import { Event } from "../Interfaces"
import Log from "../Utils/log"

export const event: Event = {
    name: 'ready',
    run: async (client:any) => {
        Log.info("Bot is Online", "Client")
        client.user.setActivity("qovery.com")
    }
}