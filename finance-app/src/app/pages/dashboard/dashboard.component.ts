import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { DataModel, ExpenseIncomeModel, DataModelResponse } from '../../interfaces/dataModel';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  budgets: ExpenseIncomeModel[];
  data: DataModel;
  total: number;
  totalAfterExpenses: number;
  monthlyTotal: number;
  weeklyTotal: number;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.data = await this.getData();
    const earnings = this.data.earnings;
    const expenseModel = this.data.expenses;
    const taxes = Utils.getTax(earnings);
    const NiPayments = Utils.getNationalInsurance(earnings);
    const studentLoanPayments = Utils.getStudentLoanRepayments(earnings);
    const expenses = Utils.getExpenses(expenseModel)
    this.budgets = earnings.map((earning, index) => {
      return {
        name: earning.name,
        amount: earning.amount - taxes[index].amount - NiPayments[index].amount - studentLoanPayments[index].amount
      }
    })
    if(this.budgets.length !== 0) {
      this.total = (this.budgets.reduce((prev: ExpenseIncomeModel, cur: ExpenseIncomeModel) => {
        return {
          name: "any",
          amount: prev.amount + cur.amount
        }
      })).amount
    } else {
      this.total = 0;
    }
    this.totalAfterExpenses = this.total - expenses;
    this.monthlyTotal = this.totalAfterExpenses/12;
    this.weeklyTotal = this.totalAfterExpenses/52;
    
    console.log(this.data);
  }

  async saveData() {
    this.data = await this.dataService.saveData(this.data);
  }

  async getData(): Promise<DataModel> {
    const data: DataModelResponse = await this.dataService.getData();
    const returnValue: DataModel = {
      earnings: [],
      expenses: {
        monthly: [],
        weekly: []
      },
      taxBands: data.taxBands
    }
    if (data) {
      returnValue.earnings = data.earnings || [];
      if(data.expenses) {
        returnValue.expenses = {
          monthly: data.expenses.monthly || [],
          weekly: data.expenses.weekly || []
        }
      }
    }
    return returnValue;
  }

}


