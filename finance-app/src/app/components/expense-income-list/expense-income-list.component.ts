import { Component, OnInit } from '@angular/core';
import { ExpenseIncomeModel } from '../../interfaces/dataModel';
import { ValueBase } from '../../utils/valueBase';

@Component({
  selector: 'app-expense-income-list',
  templateUrl: './expense-income-list.component.html',
  styleUrls: ['./expense-income-list.component.scss']
})
export class ExpenseIncomeListComponent extends ValueBase<ExpenseIncomeModel[]> implements OnInit {
  constructor() { 
    super()
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
