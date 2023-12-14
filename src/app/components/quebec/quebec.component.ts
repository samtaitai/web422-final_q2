import { Component } from '@angular/core';
import { Uni } from 'src/app/interfaces/uni';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quebec',
  templateUrl: './quebec.component.html',
  styleUrls: ['./quebec.component.css'],
})
export class QuebecComponent {
  universities: Uni[] = [];

  constructor(private dataService: DataService) {
    this.dataService.filterUniByProvince('Quebec').subscribe((data) => {
      this.universities = data;
    });
  }
}
