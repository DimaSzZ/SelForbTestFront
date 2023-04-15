import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../api/services/orderService";
import {Order} from "../../api/models/order";
import {ItemService} from "../../api/services/itemService";
import {Item} from "../../api/models/item";
import {DateService} from "../../api/services/dateService";
import {timer} from "rxjs";

@Component({
  selector: 'app-big-order',
  templateUrl: './big-order.component.html',
  styleUrls: ['./big-order.component.css']
})
export class BigOrderComponent {
  id: number

  constructor(public router: Router,
              private orderService: OrderService,
              private item: ItemService,
              private route: ActivatedRoute,
              private dateService: DateService,
              ) {

    this.id = +this.route.snapshot.paramMap.get('id')!;
    orderService.getOneOrder(this.id).subscribe((response: Order) => {
      response.date = <string>dateService.BackToClient(response.date)
      this.order = response
    });
    item.getOrderItems(this.id).subscribe((response: Item[]) => this.items = response);
  }

  order: Order
  items: Item[]


  DeleteOrder() {
    this.orderService.deleteOrder(this.id).subscribe()
    timer(1000).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
