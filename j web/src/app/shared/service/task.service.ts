import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  private url = 'http://localhost:3003/api/card';
  private taskUrl = 'http://localhost:3003/api/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.url);
  }

  addNewTask(data: any): Observable<any> {
    return this.http.post(this.taskUrl, data);
  }
}
