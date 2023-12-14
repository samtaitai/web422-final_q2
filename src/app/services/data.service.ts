import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Uni } from '../interfaces/uni';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  universities: Uni[] = [];
  results: Uni[] = [];
  constructor(private http: HttpClient) {}
  fetchUniversities(): Observable<Uni[]> {
    return this.http
      .get<Uni[]>('http://universities.hipolabs.com/search?country=Canada')
      .pipe(
        map((data: Uni[]) => {
          this.universities = data;
          return this.universities;
        })
      );
  }
  filterUniByProvince(province: string): Observable<Uni[]> {
    return this.http
      .get<Uni[]>('http://universities.hipolabs.com/search?country=Canada')
      .pipe(
        map((data: Uni[]) => {
          this.results = [];
          this.universities = data;
          this.universities.forEach((uni) => {
            if (uni['state-province'] == province) {
              this.results.push(uni);
            }
          });
          return this.results;
        })
      );
  }
}
