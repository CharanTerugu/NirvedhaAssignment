import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from './signup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  baseUrl="http://localhost:8080"
  constructor(private http: HttpClient) { }

register(user:Signup):Observable<any>{

  return this.http.post(`${this.baseUrl}/signup`, user)

}
}
