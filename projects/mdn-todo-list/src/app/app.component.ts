import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo List';

  filter: 'all' | 'done' | 'pending' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return [...this.allItems];
    }
    return [
      ...this.allItems.filter((item) =>
        this.filter === 'done' ? item.done : !item.done
      ),
    ];
  }

  addItem(description: string) {
    if (!description) return;
    this.allItems.unshift({ description, done: false });
  }
}
