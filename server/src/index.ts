import { IPlayerX } from "./interfaces/IPlayerX.js"
import { prisma } from "./libs/prisma.js"

onNet('esx:playerLoaded', (player: number, xPlayer: IPlayerX, isNew: boolean) => {
  const id = xPlayer.playerId
  prisma
})