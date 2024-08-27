import { prisma } from "../libs/prisma.js";

export async function getPlayerApps(playerId: number) {
    return await prisma.playerApp.findMany({
        where: {
            playerId
        },
        include: {
            app: true
        }
    })
}