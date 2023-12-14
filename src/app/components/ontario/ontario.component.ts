import { Component } from '@angular/core';
import { Uni } from 'src/app/interfaces/uni';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ontario',
  templateUrl: './ontario.component.html',
  styleUrls: ['./ontario.component.css'],
})
export class OntarioComponent {
  universities: Uni[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getUniversities().subscribe((data: Uni[]) => {
      this.universities = data;
      this.universities = this.universities.filter((uni) => {
        uni['state-province'] == 'Ontario';
      });
    });
  }
}
