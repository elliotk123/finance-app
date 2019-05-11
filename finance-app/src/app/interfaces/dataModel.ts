export interface EarningModel {
    name: string,
    amount: number
}

export interface TaxBandModel {
    earning: number,
    percentage: number
}

export interface ExpenseModel {
    monthly: Expense[],
    weekly: Expense[]
}

export interface Expense {
    name: string,
    cost: number
}

export interface DataModel {
    earnings: EarningModel[],
    taxBands: TaxBandModel[],
    expenses: ExpenseModel
}

