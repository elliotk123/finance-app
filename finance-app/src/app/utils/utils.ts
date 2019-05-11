import { DataModel, EarningModel, Expense } from '../interfaces/dataModel';

export class Utils {
    static getTax(data: DataModel): EarningModel[] {
        const tax: EarningModel[] = data.earnings.map(earning => {
            const taxPayment = Utils.calculateTax(earning.amount);
            return {
                name: earning.name,
                amount: taxPayment
            }
        })
        return tax;
    }

    static getNationalInsurance(data: DataModel): EarningModel[] {
        return data.earnings.map(earning => {
            const NiPayment = Utils.calculateNi(earning.amount);
            return {
                name: earning.name,
                amount: NiPayment
            }
        })
    }

    private static calculateTax(earning: number) {
        return 0.2*(earning - 12500);
    }

    private static calculateNi(earning: number) {
        const weeklyEarning = earning/52; 
        const weeklyEarningAfterNi = (weeklyEarning - 166.01)*0.12;
        return weeklyEarningAfterNi * 52;
    }

    static getExpenses(data: DataModel) {
        const totalMonthlyExpense = (data.expenses.monthly.reduce((prev: Expense, curr: Expense) => {
            return {
                name: "total",
                cost: prev.cost + curr.cost
            }
        })).cost
        const totalWeeklyExpense = (data.expenses.weekly.reduce((prev: Expense, curr: Expense) => {
            return {
                name: "total",
                cost: prev.cost + curr.cost
            }
        })).cost
        return totalMonthlyExpense * 12 + totalWeeklyExpense * 52;
    }

}