import { DataModel, ExpenseIncomeModel } from '../interfaces/dataModel';

export class Utils {
    static getTax(data: DataModel): ExpenseIncomeModel[] {
        const tax: ExpenseIncomeModel[] = data.earnings.map(earning => {
            const taxPayment = Utils.calculateTax(earning.amount);
            return {
                name: earning.name,
                amount: taxPayment
            }
        })
        return tax;
    }

    static getNationalInsurance(data: DataModel): ExpenseIncomeModel[] {
        return data.earnings.map(earning => {
            const NiPayment = Utils.calculateNi(earning.amount);
            return {
                name: earning.name,
                amount: NiPayment
            }
        })
    }

    static getStudentLoanRepayments(data: DataModel): ExpenseIncomeModel[] {
        return data.earnings.map(earning => {
            const loanRepayment = Utils.calculateStudentLoan(earning.amount);
            return {
                name: earning.name,
                amount: loanRepayment
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

    private static calculateStudentLoan(earning: number) {
        return Math.max((earning - 25725)*0.09, 0);
    }

    static getExpenses(data: DataModel) {
        const totalMonthlyExpense = (data.expenses.monthly.reduce((prev: ExpenseIncomeModel, curr: ExpenseIncomeModel) => {
            return {
                name: "total",
                amount: prev.amount + curr.amount
            }
        })).amount;
        const totalWeeklyExpense = (data.expenses.weekly.reduce((prev: ExpenseIncomeModel, curr: ExpenseIncomeModel) => {
            return {
                name: "total",
                amount: prev.amount + curr.amount
            }
        })).amount;
        return totalMonthlyExpense * 12 + totalWeeklyExpense * 52;
    }

}