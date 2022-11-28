import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/')
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
