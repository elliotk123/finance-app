export interface EarningModel {
    name: string,
    amount: number
}

export interface TaxBandModel {
    earning: number,
    percentage: number
}

export interface DataModel {
    earnings: EarningModel[],
    taxBands: TaxBandModel[]
}

