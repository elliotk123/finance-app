import { Component, OnInit } from '@angular/core';
import { SummaryBarModel } from 'src/app/interfaces/summaryBarInput';

@Component({
  selector: 'app-track-spending',
  templateUrl: './track-spending.component.html',
  styleUrls: ['./track-spending.component.scss']
})
export class TrackSpendingComponent implements OnInit {
  test: SummaryBarModel = {
    items: [
      {
        heading: "Overspent",
        value: 1
      },
      {
        heading: "Average Weekly Overspend",
        value: 2
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
