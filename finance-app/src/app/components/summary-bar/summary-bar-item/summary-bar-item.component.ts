import { Component, OnInit } from '@angular/core';
import { ValueBase } from 'src/app/utils/valueBase';
import { SummaryBarItemModel } from 'src/app/interfaces/summaryBarInput';

@Component({
  selector: 'app-summary-bar-item',
  templateUrl: './summary-bar-item.component.html',
  styleUrls: ['./summary-bar-item.component.scss']
})
export class SummaryBarItemComponent extends ValueBase<SummaryBarItemModel> implements OnInit {
  
  constructor() {
    super();
   }

  ngOnInit() {
  }

}
