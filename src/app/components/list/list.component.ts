import { Component, Input } from '@angular/core';
import { Uni } from 'src/app/interfaces/uni';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() data: Uni[] = [];
}
