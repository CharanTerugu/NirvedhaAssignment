import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

   baseUrl="http://localhost:8080"
  constructor(private http: HttpClient) { }

  ngOnInit(){
    window.location.reload();
  }
  login(user:Login):Observable<any>{
    

    return this.http.post(`${this.baseUrl}/authentication`, user, {responseType:'text' as 'json'})

  }

  
}
