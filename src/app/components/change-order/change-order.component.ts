import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../api/services/orderService";
import {ItemService} from "../../api/services/itemService";
import {Order} from "../../api/models/order";
import {Item} from "../../api/models/item";
import {DateService} from "../../api/services/dateService";

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.css']
})
export class ChangeOrderComponent {
  id: number;
  order: Order;
  items: Item[];
  deleteItem: Item;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private itemService: ItemService,
    private dateService: DateService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.orderService.getOneOrder(this.id).subscribe((response: Order) => {
      response.date = <string>this.dateService.BackToClient(response.date);
      this.order = response;
      this.itemService.getOrderItems(this.id).subscribe((response: Item[]) => {
        this.items = response;
      });
    });
  }

  DeleteItem() {
    const index = this.items.indexOf(this.deleteItem);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    console.log(this.deleteItem.id!)
    this.itemService.deleteItems(this.deleteItem.id!).subscribe(response => console.log(response))
  }

  AddItem() {
    const item: Item = {
      id: null,
      name: '',
      quantity: null,
      unit: '',
      orderId: this.id
    };
    this.items.push(item);
  }

  SaveAll() {
    this.itemService.saveItems(this.items, this.id).subscribe((response: string) => alert(response));
    this.orderService.saveOrder(this.order).subscribe((response: string) => alert(response));
  }
}


