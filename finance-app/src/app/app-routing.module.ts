import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrackSpendingComponent } from './pages/track-spending/track-spending.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'spending', component: TrackSpendingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
