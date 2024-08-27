import { IPlayerAccount } from "./IPlayerAccount.js"
import { ICoords } from "./ICoords.js"
import { IPlayerMetadata } from "./IPlayerMetadata.js"
import { IPlayerVariables } from "./IPlayerVariables.js"
import { IPlayerWeapon } from "./IPlayerWeapon.js"
import { IPlayerInventoryItem } from "./IPlayerInventoryItem.js"
import { IPlayerJob } from "./IPlayerJob.js"

export interface IPlayerX {
  maxWeight: number,
  license: string,
  metadata: IPlayerMetadata,
  variables: IPlayerVariables,
  loadout: IPlayerWeapon[],
  group: string
  playerId: number,
  source: number,
  coords: ICoords & { heading: number },
  accounts: IPlayerAccount[],
  admin: boolean,
  weight: number,
  name: string,
  inventory: IPlayerInventoryItem[],
  job: IPlayerJob,
  addAccountMoney: (account: string, money: number) => void,
  addInventoryItem: (item: string, count: number) => void,
  addMoney: (money: number) => void,
  addWeapon: (weaponName: string, ammo: number) => void,
  addWeaponAmmo: (weaponName: string, ammoCount: number) => void,
  addWeaponComponent: (weaponName: string, weaponComponent: string) => void,
  canCarryItem: (item: string, count: number) => boolean,
  canSwapItem: (firstItem: string, firstItemCount: number, testItem: string, testItemCount: number) => boolean,
  clearMeta: (index: string | Record<string, any>) => void,
  getMeta: (index: string | undefined, subIndex?: string) => unknown,
  getAccount: (account: "bank" | "money" | "black_money") => IPlayerAccount
  getAccounts: () => IPlayerAccount[],
  getCoords: () => ICoords,
  getGroup: () => string,
  getIdentifier: () => string,
  getInventory: (minimal?: boolean) => IPlayerInventoryItem[],
  getInventoryItem: (item: string) => IPlayerInventoryItem,
  getJob: () => IPlayerJob,
  getLoadout: () => IPlayerWeapon[],
  getMoney: () => number,
  getName: () => string,
  getWeapon: (weaponName: string) => IPlayerWeapon,
  getWeaponTint: (weaponName: string) => number,
  getWeight: () => number,
  hasItem: (item: string, metadata?: string) => boolean,
  hasWeapon: (weaponName: string) => boolean,
  hasWeaponComponent: (weaponName: string, weaponComponent: string) => boolean,
  kick: (reason: string) => void,
  removeAccountMoney: (account: string, money: number) => void,
  removeInventoryItem: (item: string, count: number) => void,
  removeMoney: (money: number) => void,
  removeWeapon: (weaponName: string) => void,
  removeWeaponAmmo: (weaponName: string, ammoCount: number) => void,
  removeWeaponComponent: (weaponName: string, weaponComponent: string) => void,
  setMeta: (index: string, value: number | string | Record<string, any>) => void
  setAccountMoney: (account: string, money: number) => void
  setCoords: (coords: ICoords) => void
  setInventoryItem: (item: string, count: number) => void
  setJob: (name: string, grade: string | number) => void
  setMaxWeight: (newWeight: number) => void,
  setMoney: (money: number) => void,
  setName: (newName: string) => void,
  setWeaponTint: (weaponName: string, weaponTintIndex: number) => void
  showAdvancedNotification: (sender: string, subject: string, msg: string, textureDict: string, iconType: number, flash: boolean | undefined, saveToBrief: boolean | undefined, hudColorIndex?: number) => void
  showHelpNotification: (msg: string, thisFrame: boolean | undefined, beep: boolean | undefined, duration?: number) => void,
  showNotification: (msg: string, flash: boolean | undefined, saveToBrief: boolean | undefined, hudColorIndex?: number) => void,
  triggerEvent: (eventName: string, ...args: any[]) => void
}