import {Validators} from "@angular/forms";

export class Frame {
    id: number
    numberOfFloors: number
    floorNumber: number
    floorHeight: number
    outerWallPerimeter: number
    baseArea: number
    externalWallThickness: number
    internalWallLength: number
    internalWallThickness: number
    osbexternalWall: string
    steamWaterproofingExternalWall: string
    windscreenExternalWall: string
    insulationExternalWall: string
    osbinternalWall: string
    apertures: {
        id: {
            frameId: number
            apertureId: number
        }
        amount: number
        aperture: {
            id: number
            type: string
            height: number
            weight: number
        }
    }
    overlapThickness: number
    osbthickness: string
    steamWaterproofingThickness: string
    windscreenProtectionThickness: string
    insulationThickness: string
}