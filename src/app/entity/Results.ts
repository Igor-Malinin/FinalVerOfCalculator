import {Material} from "./Material";
import {Frame} from "./Frame";
import {Foundation} from "./Foundation";

export class Results {
    id: number
    partOfFloor: string
    material: string
    amount: number
    units: string
    price: number
    totalCost: number
    foundation: Foundation
    frame: Frame
    materialCharacteristicks: Material
}