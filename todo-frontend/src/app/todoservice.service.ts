import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  baseUrl="http://localhost:8080"
  private authToken=localStorage.getItem('token')
   private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.authToken}`,
  });

  constructor(private http: HttpClient) { }

  getTodos():Observable<todo[]>{

    return this.http.get<todo[]>(`${this.baseUrl}/user/todos`,{ headers: this.headers })

  } 


  logout():Observable<any>{
    return this.http.post(`${this.baseUrl}/logout`,{ headers: this.headers })
  }

addTask(data:todo):Observable<any>{
  return this.http.post<todo>(`${this.baseUrl}/user/add/todo`,data,{ headers: this.headers })
}

editTodo(id:number,todo:todo):Observable<any>{
  return this.http.put<todo>(`${this.baseUrl}/user/update/${id}`,todo,{ headers: this.headers })
}
deleteTodo(id:number):Observable<any>{
  return this.http.delete(`${this.baseUrl}/user/delete/${id}`,{ headers: this.headers })
}
updateAsCompleted(id:number,list:todo):Observable<any>{
  return this.http.put<todo>(`${this.baseUrl}/user/change/${id}`,list,{ headers: this.headers })
}

getTodo(id:number):Observable<todo>{

  return this.http.get<todo>(`${this.baseUrl}/user/getTodo/${id}`,{ headers: this.headers })

} 
}
