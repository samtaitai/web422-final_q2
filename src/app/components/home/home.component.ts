import { Component } from '@angular/core';
import { Uni } from 'src/app/interfaces/uni';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  universities: Uni[] = [];

  constructor(private dataService: DataService) {
    this.dataService.fetchUniversities().subscribe((data) => {
      this.universities = data;
    });
  }
}
