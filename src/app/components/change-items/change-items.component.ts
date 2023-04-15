import {Component, Input} from '@angular/core';
import {Item} from "../../api/models/item";

@Component({
  selector: 'app-change-items',
  templateUrl: './change-items.component.html',
  styleUrls: ['./change-items.component.css']
})
export class ChangeItemsComponent {
  @Input() item: Item;
}
