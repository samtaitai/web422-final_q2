import { Component } from '@angular/core';
import { Uni } from 'src/app/interfaces/uni';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-alberta',
  templateUrl: './alberta.component.html',
  styleUrls: ['./alberta.component.css'],
})
export class AlbertaComponent {
  universities: Uni[] = [];

  constructor(private dataService: DataService) {
    this.dataService.fetchUniversities().subscribe((data) => {
      this.universities = data;
      this.universities = this.dataService.filterUniByProvince('Alberta');
    });
  }
}
