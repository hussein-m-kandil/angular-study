import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  editItem(description: string) {
    this.editable = false;
    if (description) this.item.description = description;
  }

  toggleEditable() {
    this.editable = !this.editable;
  }
}
