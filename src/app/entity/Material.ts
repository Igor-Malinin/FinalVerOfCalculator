export class Material {
    id: number
    name: string
    materialType: string
    materialCharacteristic: {
        id: number
        name: string
        width: number
        thickness: number
        length: number
        volume: number
        priceList: {
            id: number
            dateOfPurchase: string
            purchasePrice: number
            sellingPrice: number
        }
        unit: {
            id: number
            name: string
        }
    }

}