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
        let totalMonthlyExpense: number;
        if (expenses.monthly.length === 0) {
            totalMonthlyExpense = 0
        } else {
            totalMonthlyExpense = (expenses.monthly.reduce((prev: ExpenseIncomeModel, curr: ExpenseIncomeModel) => {
                return {
                    name: "total",
                    amount: Number(prev.amount) + Number(curr.amount)
                }
            })).amount;
        }
        let totalWeeklyExpense: number;
        if (expenses.weekly.length === 0) {
            totalWeeklyExpense = 0;
        } else {
            totalWeeklyExpense = (expenses.weekly.reduce((prev: ExpenseIncomeModel, curr: ExpenseIncomeModel) => {
                return {
                    name: "total",
                    amount: Number(prev.amount) + Number(curr.amount)
                }
            })).amount;
        }
        return totalMonthlyExpense * 12 + totalWeeklyExpense * 52;
    }

}