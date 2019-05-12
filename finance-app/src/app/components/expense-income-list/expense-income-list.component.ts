import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ExpenseIncomeModel } from '../../interfaces/dataModel';

@Component({
  selector: 'app-expense-income-list',
  templateUrl: './expense-income-list.component.html',
  styleUrls: ['./expense-income-list.component.scss']
})
export class ExpenseIncomeListComponent implements OnInit {
  itemListValue: ExpenseIncomeModel[];

  @Input()
  get itemList() {
    return this.itemListValue;
  }

  @Output()
  itemListChange = new EventEmitter<ExpenseIncomeModel[]>();

  set itemList(value: ExpenseIncomeModel[]) {
    console.log("change", value);
    this.itemListValue = value;
    this.itemListChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
