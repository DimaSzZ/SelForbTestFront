import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {Provider} from "./api/models/provider";
import {ProviderService} from "./api/services/providerService";
import {FilterRequest} from "./api/models/FilterRequest";
import {FilterService} from "./api/services/filterService";
import {DateService} from "./api/services/dateService";
import {Order} from "./api/models/order";
import {OrderService} from "./api/services/orderService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router, private prov: ProviderService, private search: FilterService,
              private dateService: DateService, private filerService: FilterService, private orderService: OrderService) {
    this.prov.getAllProviders().subscribe((response: Provider[]) => this.providers = response)
    this.orderService.getAllOrder().subscribe((response: Order[]) => {
      this.orders = response.map((order: Order) => {
        order.date = dateService.BackToClient(order.date)!;
        return order;
      });
    });
    this.CleanFilter()
  }
  providers: Provider[]
  filterRequest: FilterRequest
  orders: Order[]
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  selectedProvider: { id: number, name: string } | null = null;
  CleanFilter() {
    this.filterRequest = {
      number: null,
      lowDate: null,
      highDate: null,
      providerId: null,
      productName: null,
      unit: null,
      providerName: null
    };
    this.range.reset()
    this.selectedProvider = null
  }

  Search() {
    this.filterRequest.lowDate = this.dateService.FrontToBack(this.range.get('start')!.value)
    this.filterRequest.highDate = this.dateService.FrontToBack(this.range.get('end')!.value)
    this.filterRequest.providerId = this.selectedProvider?.id
    this.filterRequest.providerName = this.selectedProvider?.name.toString()
    this.filerService.basicFilter(this.filterRequest).subscribe((response: Order[]) => {
      this.orders = response.map((order: Order) => {
        order.date = this.dateService.BackToClient(order.date)!;
        return order;
      });
    });
    console.log(this.filterRequest)
    this.CleanFilter()
  }
}
