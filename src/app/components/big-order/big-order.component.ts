import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../../api/services/orderService";
import {Order} from "../../api/models/order";
import {ItemService} from "../../api/services/itemService";
import {Item} from "../../api/models/item";

@Component({
  selector: 'app-big-order',
  templateUrl: './big-order.component.html',
  styleUrls: ['./big-order.component.css']
})
export class BigOrderComponent {
  @Input() id: number;
  constructor(public router: Router,private orderService:OrderService,private item:ItemService) {
    orderService.getOneOrder(this.id).subscribe((response:Order) => this.order = response);
    item.getOrderItems(this.id).subscribe((response:Item[]) => this.items = response);
  }
  order:Order
  items:Item[]
}
