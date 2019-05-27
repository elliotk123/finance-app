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

  data: DataModel;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.data = await this.getData();
    console.log(this.data);
  }

  get totalAfterExpenses() {
    if(!this.data) {
      return 0
    }
    const taxes = Utils.getTax(this.data.earnings);
    const NiPayments = Utils.getNationalInsurance(this.data.earnings);
    const studentLoanPayments = Utils.getStudentLoanRepayments(this.data.earnings);
    const expenses = Utils.getExpenses(this.data.expenses)
    const budgets = this.data.earnings.map((earning, index) => {
      return {
        name: earning.name,
        amount: earning.amount - taxes[index].amount - NiPayments[index].amount - studentLoanPayments[index].amount
      }
    })
    let total: number;
    if (budgets.length !== 0) {
      total =  (budgets.reduce((prev: ExpenseIncomeModel, cur: ExpenseIncomeModel) => {
        return {
          name: "any",
          amount: prev.amount + cur.amount
        }
      })).amount
    } else {
      total = 0;
    }
    return total - expenses;

  }

  async saveData() {
    this.data = await this.dataService.saveData(this .data);
  }

  async getData(): Promise<DataModel> {
    return this.dataService.getData();
  }

}


