import { ICoords } from "./ICoords.js"

export interface IOneSync {
  SpawnObject: (model: string | number, coords: ICoords, heading: number, cb: (entity: number) => void) => number
  SpawnPed: (model: string | number, coords: ICoords, heading: number, cb: (entity: number) => void) => number
  SpawnPedInVehicle: (model: string | number, vehicle: number, seat: number, cb: (entity: number) => void) => number
}