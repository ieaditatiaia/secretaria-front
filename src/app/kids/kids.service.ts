import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Kid } from 'src/app/core/models';

export class KidFilter {
  name?: string = "";
  page: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class KidsService {

  private baseURL = 'https://ieadi.herokuapp.com/api/v1/kids';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe) { }

  search(filter: KidFilter) {
    return this.http.get(`${this.baseURL}/research?name=${filter.name}&size=5&page=${filter.page}`)
      .toPromise()
      .then((response: any) => {
        const kids = response['content'];
        const result = {
          kids,
          total: response['totalElements']
        };
        return result;
      })
  }

  load(id: string) {
    return this.http.get(`${this.baseURL}/${id}`)
      .toPromise()
      .then((response:any) => {
        this.convertStringsForDates([response]);

        return response;
      });
  }

  private convertStringsForDates(kids: any[]) {
    for (const kid of kids) {
      kid.birthday = new Date(kid.birthday);
      kid.birthday.setDate(kid.birthday.getDate() + 1);
      kid.datePresentation = new Date(kid.datePresentation);
      kid.datePresentation.setDate(kid.datePresentation.getDate() + 1);
    }
  }

  save(kid: Kid): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');
    kid.birthday = this.datePipe.transform(kid.birthday, 'yyyy-MM-dd')?.toString();
    kid.datePresentation = this.datePipe.transform(kid.datePresentation, 'yyyy-MM-dd')?.toString();
    return this.http.post<Kid>(this.baseURL, kid, { headers })
      .toPromise()
  }

  edit(kid: Kid): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');
    kid.birthday = this.datePipe.transform(kid.birthday, 'yyyy-MM-dd')?.toString();
    kid.datePresentation = this.datePipe.transform(kid.datePresentation, 'yyyy-MM-dd')?.toString();
    console.log(kid);
    return this.http.put(this.baseURL, kid, { headers })
      .toPromise()
  }

  delete(kidId: string): Promise<any> {
    return this.http.delete(`${this.baseURL}/${kidId}`)
      .toPromise()
      .then(() => null)
  }

  certificate(kidId: string): Promise<any> {
    return this.http.get(`${this.baseURL}/${kidId}/certificate`, { responseType: 'blob' })
      .toPromise()
  }
}
