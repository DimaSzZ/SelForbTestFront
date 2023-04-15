import {Component, Input} from '@angular/core';
import {Item} from "../../api/models/item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() itemComponent: Item;
}
