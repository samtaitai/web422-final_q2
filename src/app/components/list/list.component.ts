import { Component, Input } from '@angular/core';
import { Uni } from 'src/app/interfaces/uni';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() data: Uni[] = [];

  removeRow(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }
}
