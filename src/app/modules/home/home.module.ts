import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [DashboardComponent, NavigationComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
