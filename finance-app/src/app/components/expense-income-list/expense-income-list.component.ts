import { Component, OnInit, Input } from '@angular/core';
import { ExpenseIncomeModel } from '../../interfaces/dataModel';
import { ValueBase } from '../../utils/valueBase';

@Component({
  selector: 'app-expense-income-list',
  templateUrl: './expense-income-list.component.html',
  styleUrls: ['./expense-income-list.component.scss']
})
export class ExpenseIncomeListComponent extends ValueBase<ExpenseIncomeModel[]> implements OnInit {
  @Input()
  readonly = false;
  constructor() { 
    super()
  }

  ngOnInit() {
    super.ngOnInit();
  }

  addItem() {
    this.value.push({ 
      name: "",
      amount: 0
    })
  }

  removeItem(index) {
    this.value.splice(index);
  }

}
