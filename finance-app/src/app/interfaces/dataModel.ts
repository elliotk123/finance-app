export interface ExpenseIncomeModel {
    name: string,
    amount: number
}

export interface TaxBandModel {
    earning: number,
    percentage: number
}

export interface ExpenseModel {
    monthly: ExpenseIncomeModel[],
    weekly: ExpenseIncomeModel[]
}

export interface DataModel {
    earnings: ExpenseIncomeModel[],
    taxBands: TaxBandModel[],
    expenses: ExpenseModel
}

