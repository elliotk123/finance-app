import { Component, OnInit, Input } from '@angular/core';
import { ExpenseIncomeModel } from '../../../interfaces/dataModel';
import { ValueBase } from '../../../utils/valueBase';

@Component({
  selector: 'app-expense-income-item',
  templateUrl: './expense-income-item.component.html',
  styleUrls: ['./expense-income-item.component.scss']
})
export class ExpenseIncomeItemComponent extends ValueBase<ExpenseIncomeModel> implements OnInit {
  @Input()
  readonly = false;
  constructor() {
    super()
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
