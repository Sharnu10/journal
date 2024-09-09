import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  private url = 'http://localhost:3003/api/card';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.url);
  }
}
