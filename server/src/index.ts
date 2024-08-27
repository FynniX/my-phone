import { PlayerApp } from "@prisma/client"
import { IPlayerX } from "./interfaces/IPlayerX.js"
import { prisma } from "./libs/prisma.js"
import { getPlayerFromIdentifier } from "./utils/GetPlayerIdFromIdentifier.js"
import { getPlayerApps } from "./utils/GetPlayerApps.js"

onNet('my-phone:apps:add', async (source: number, appId: number, pos: number, page: number, favorite: boolean, atHome: boolean) => {
  const player = ESX.GetPlayerFromId(source)
  const phonePlayer = await getPlayerFromIdentifier(player.getIdentifier())

  await prisma.playerApp.create({
    data: {
      pos,
      page,
      appId,
      playerId: phonePlayer.id,
      favorite,
      atHome
    }
  })
})

onNet('my-phone:apps:update', async (source: number, appId: number, data: { pos?: number, page?: number, favorite?: boolean, atHome?: boolean }) => {
  const player = ESX.GetPlayerFromId(source)
  const phonePlayer = await getPlayerFromIdentifier(player.getIdentifier())

  await prisma.playerApp.update({
    where: {
      appId_playerId: {
        appId,
        playerId: phonePlayer.id
      }
    },
    data
  })
})

onNet('my-phone:apps:remove', async (source: number, appId: number) => {
  const player = ESX.GetPlayerFromId(source)
  const phonePlayer = await getPlayerFromIdentifier(player.getIdentifier())

  await prisma.playerApp.delete({
    where: {
      appId_playerId: {
        appId,
        playerId: phonePlayer.id
      }
    }
  })
})

ESX.RegisterServerCallback('my-phone:player:apps', async (source: number, cb: (apps: Awaited<ReturnType<typeof getPlayerApps>>) => void) => {
  const player = ESX.GetPlayerFromId(source)
  const phonePlayer = await getPlayerFromIdentifier(player.getIdentifier())
  cb(await getPlayerApps(phonePlayer.id))
})

onNet('esx:playerLoaded', async (_: number, xPlayer: IPlayerX) => {
  const identifier = xPlayer.getIdentifier()
  const player = await prisma.player.findUnique({ where: { identifier } })
  if (!player)
    await prisma.player.create({ data: { identifier } })
})