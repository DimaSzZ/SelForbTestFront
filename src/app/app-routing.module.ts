import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BigOrderComponent} from "./components/big-order/big-order.component";
import {ChangeOrderComponent} from "./components/change-order/change-order.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";

const routes: Routes = [
  {path:'open-order/:id',component:BigOrderComponent},
  {path:'open-order/:id/change-order', component: ChangeOrderComponent},
  {path:'create-order', component:CreateOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
