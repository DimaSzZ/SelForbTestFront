import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from "@angular/material/table";
import { SmallOrderComponent } from './components/small-order/small-order.component';
import { BigOrderComponent } from './components/big-order/big-order.component';
import { ChangeOrderComponent } from './components/change-order/change-order.component';
import {MatButtonModule} from "@angular/material/button";
import { ItemsComponent } from './components/items/items.component';
import { ChangeItemsComponent } from './components/change-items/change-items.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    BigOrderComponent,
    ChangeOrderComponent,
    SmallOrderComponent,
    BigOrderComponent,
    ChangeOrderComponent,
    ItemsComponent,
    ChangeItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
