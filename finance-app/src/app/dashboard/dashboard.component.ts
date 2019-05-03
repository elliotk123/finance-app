import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { DataModel } from '../../interfaces/dataModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  budget: number;
  data: DataModel;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.budget = 123;
    this.data = await this.dataService.getData();
    console.log(this.data);
  }

}
