import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BigOrderComponent} from "./components/big-order/big-order.component";
import {ChangeOrderComponent} from "./components/change-order/change-order.component";

const routes: Routes = [
  {path:'open-order/:Id',component:BigOrderComponent,
  children:[{
    path:'change-order',
    component:ChangeOrderComponent
  }]},
  {path:'create-order', component:ChangeOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
