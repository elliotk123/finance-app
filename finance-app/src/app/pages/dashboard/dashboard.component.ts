import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { DataModel, ExpenseIncomeModel } from '../../interfaces/dataModel';
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
    this.data = await this.dataService.getData();
    const taxes = Utils.getTax(this.data);
    const NiPayments = Utils.getNationalInsurance(this.data);
    const studentLoanPayments = Utils.getStudentLoanRepayments(this.data);
    const expenses = Utils.getExpenses(this.data)
    this.budgets = this.data.earnings.map((earning, index) => {
      return {
        name: earning.name,
        amount: earning.amount - taxes[index].amount - NiPayments[index].amount - studentLoanPayments[index].amount
      }
    })
    this.total = (this.budgets.reduce((prev: ExpenseIncomeModel, cur: ExpenseIncomeModel) => {
      return {
        name: "any",
        amount: prev.amount + cur.amount
      }
    })).amount
    this.totalAfterExpenses = this.total - expenses;
    this.monthlyTotal = this.totalAfterExpenses/12;
    this.weeklyTotal = this.totalAfterExpenses/52;
    
    console.log(this.data);
  }

  async saveData() {
    console.log("save", this.data);
  }
}


