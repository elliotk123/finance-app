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
        heading: "Test 1",
        value: 1
      },
      {
        heading: "Test 2",
        value: 2
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
