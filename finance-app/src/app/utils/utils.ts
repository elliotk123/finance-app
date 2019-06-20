import { DataModel, ExpenseIncomeModel, ExpenseModel } from '../interfaces/dataModel';

export class Utils {
    static getTax(earnings: ExpenseIncomeModel[]): ExpenseIncomeModel[] {
        const tax: ExpenseIncomeModel[] = earnings.map(earning => {
            const taxPayment = Utils.calculateTax(earning.amount);
            return {
                name: earning.name,
                amount: taxPayment
            }
        })
        return tax;
    }

    static getNationalInsurance(earnings: ExpenseIncomeModel[]): ExpenseIncomeModel[] {
        return earnings.map(earning => {
            const NiPayment = Utils.calculateNi(earning.amount);
            return {
                name: earning.name,
                amount: NiPayment
            }
        })
    }

    static getStudentLoanRepayments(earnings: ExpenseIncomeModel[]): ExpenseIncomeModel[] {
        return earnings.map(earning => {
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

    static getExpenses(expenses: ExpenseModel) {
        const totalYearlyExpense = Utils.getTotalExpense(expenses.yearly).amount;
        const totalMonthlyExpense = Utils.getTotalExpense(expenses.monthly).amount;
        const totalWeeklyExpense = Utils.getTotalExpense(expenses.weekly).amount;
        return totalYearlyExpense + totalMonthlyExpense * 12 + totalWeeklyExpense * 52;
    }

    static getTotalExpense(expenses: ExpenseIncomeModel[]) {
        if (expenses.length == 0) {
            return {
                name: "total",
                amount: 0
            }
        }
        if (expenses.length == 1) {
            return {
                name: "total",
                amount: expenses[0].amount
            }
        }
        return expenses.reduce((prev: ExpenseIncomeModel, cur: ExpenseIncomeModel) => {
            return {
              name: "total",
              amount: Number(prev.amount) + Number(cur.amount)
            }
        })
    }

}