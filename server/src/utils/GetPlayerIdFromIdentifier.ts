import { prisma } from "../libs/prisma.js";

export async function getPlayerFromIdentifier(identifier: string) {
    const player = await prisma.player.findUnique({ where: { identifier }})
    if (!player) throw new Error('Player not found!')
    return player
}