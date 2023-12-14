import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Uni } from '../interfaces/uni';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  universities: Uni[] = [];
  isFetch: boolean = false;
  constructor(private http: HttpClient) {}
  getUniversities(): Observable<Uni[]> {
    return this.http.get<Uni[]>(
      'http://universities.hipolabs.com/search?country=Canada'
    );
  }
  /* 
  getOntarioUniversities() {
    var result = null;
    if (this.isFetch) {
      this.universities = this.universities.filter((uni) => {
        uni['state-province'] == 'Ontario';
      });
      result = this.universities;
    }
    return result;
  }
  
  getQuebecUniversities(): Uni[] {
    this.getUniversities().subscribe((data: Uni[]) => {
      this.isFetch = true;
      this.universities = data;
      this.universities = this.universities.filter((uni) => {
        uni['state-province'] == 'Quebec';
      });
    });
    return this.universities;
  }
  getAlbertaUniversities(): Uni[] {
    this.getUniversities().subscribe((data: Uni[]) => {
      this.isFetch = true;
      this.universities = data;
      this.universities = this.universities.filter((uni) => {
        uni['state-province'] == 'Alberta';
      });
    });
    return this.universities;
  }
  setUniversities(province?: string): Uni[] {
    if (province == 'Ontario') {
      this.getOntarioUniversities();
    } else if (province == 'Quebec') {
      this.getQuebecUniversities();
    } else if (province == 'Alberta') {
      this.getAlbertaUniversities();
    } else {
      this.getUniversities();
    }
    return this.universities;
  }
  */
}
