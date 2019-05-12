import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseIncomeModel } from '../../../interfaces/dataModel';

@Component({
  selector: 'app-expense-income-item',
  templateUrl: './expense-income-item.component.html',
  styleUrls: ['./expense-income-item.component.scss']
})
export class ExpenseIncomeItemComponent implements OnInit {
  itemValue: ExpenseIncomeModel;

  @Input()
  get item() {
    return this.itemValue;
  }

  @Output()
  itemChange = new EventEmitter<ExpenseIncomeModel>();

  set item(value: ExpenseIncomeModel) {
    this.itemValue = value;
    this.itemChange.emit(value);
  }


  constructor() { }

  ngOnInit() {
  }

}
