import { IPlayerX } from "./src/interfaces/IPlayerX"
import { IDiscordLogField } from "./src/interfaces/IDiscordLogField"
import { IPlayerJob } from "./src/interfaces/IPlayerJob"
import { IOneSync } from "./src/interfaces/IOneSync"

interface ESX {
  ClearTimeout: (id: number) => void
  RegisterCommand: (name: string, permissions: string, cb: (xPlayer: IPlayerX, args: any[], showError: boolean) => void, allowConsole: boolean, suggestion: Record<string, string>, args: Record<string, any>) => void
  CreatePickup: (type: string, name: string, count: number, label: string, playerId: number, components: string[] | undefined, tintIndex?: number) => void
  DiscordLog: (name: string | undefined, title: string, color: string | undefined, message: string) => void
  DiscordLogFields: (name: string | undefined, title: string, color: string | undefined, fields: IDiscordLogField[]) => void
  DoesJobExist: (job: string, grade: number) => boolean
  GetExtendedPlayers: (key: string | undefined, value?: string) => IPlayerX[]
  GetItemLabel: (item: string) => string
  GetJobs: () => IPlayerJob[],
  GetPlayerFromId: (playerId: number) => IPlayerX
  GetPlayerFromIdentifier: (identifier: string) => IPlayerX,
  RegisterServerCallback: (name: string, handler: (source: string, cb: (...args: any[]) => void, ...args: any[]) => void) => void
  RegisterUsableItem: (item: string, cb: (playerId: number) => void) => void
  SetTimeout: (ms: number, cb: () => void) => number
  Trace: (message: any) => void
  UseItem: (playerId: number, itemName: string) => void
  OneSync: IOneSync
}

declare var ESX: ESX