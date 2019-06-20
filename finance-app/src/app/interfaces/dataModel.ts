export interface ExpenseIncomeModel {
    name: string,
    amount: number
}

export interface TaxBandModel {
    earning: number,
    percentage: number
}

export interface ExpenseModel {
    yearly: ExpenseIncomeModel[],
    monthly: ExpenseIncomeModel[],
    weekly: ExpenseIncomeModel[]
}

export interface DataModelResponse {
    earnings?: ExpenseIncomeModel[],
    taxBands?: TaxBandModel[],
    expenses?: ExpenseModel
}

export interface DataModel {
    earnings: ExpenseIncomeModel[],
    taxBands?: TaxBandModel[],
    expenses: ExpenseModel
}

