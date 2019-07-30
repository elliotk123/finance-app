import { Component, OnInit } from '@angular/core';
import { ValueBase } from 'src/app/utils/valueBase';
import { SummaryBarModel } from 'src/app/interfaces/summaryBarInput';

@Component({
  selector: 'app-summary-bar',
  templateUrl: './summary-bar.component.html',
  styleUrls: ['./summary-bar.component.scss']
})
export class SummaryBarComponent extends ValueBase<SummaryBarModel> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
