import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {

  baseURL = 'https://ieadi.herokuapp.com/api/v1/institutions'

  constructor(private http: HttpClient) { }

  listAll(): Promise<any> {
    return this.http.get(this.baseURL)
    .toPromise();
  }
}
