import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataService } from './services/dataService';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseIncomeListComponent } from './components/expense-income-list/expense-income-list.component';
import { ExpenseIncomeItemComponent } from './components/expense-income-list/expense-income-item/expense-income-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpenseIncomeListComponent,
    ExpenseIncomeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
