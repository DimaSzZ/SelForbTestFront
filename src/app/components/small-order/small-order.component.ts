import {Component, Input} from '@angular/core';
import {Order} from "../../api/models/order";

@Component({
  selector: 'app-small-order',
  templateUrl: './small-order.component.html',
  styleUrls: ['./small-order.component.css']
})
export class SmallOrderComponent {
  @Input() orderComponent: Order;

}
