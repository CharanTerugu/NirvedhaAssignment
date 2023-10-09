import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from '../todoservice.service';
import { todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

flag:boolean=false;
  todos:todo={} as todo;
  change:todo={} as todo;
  msg:string=""
  todoList:todo[]={} as todo[]
  constructor(private router:Router,private service:TodoserviceService){}

ngOnInit(){
 this.service.getTodos().subscribe((data)=>{
   this.todoList=data;
   console.log(this.todoList)
 })
}

  logout(){


    localStorage.removeItem('token');

    this.router.navigate(['/'])
    // this.service.logout().subscribe(()=>
    // {
    //   alert("logout sucessfull")
    //   localStorage.removeItem('token');

    //   this.router.navigate(['/'])
    // },error=>{
    //   console.log(error)
    // })
   
  }

  addTask(){

    this.service.addTask(this.todos).subscribe(()=>{
       this.msg="todo added succesfully"
       this.ngOnInit()
    })
  }
  completeTask(list:todo){
    console.log(list)
    list.completed=!(list.completed)
     this.service.updateAsCompleted(list.todoId,list).subscribe(()=>{
      
     })
  }

  editTask(par:todo){
    this.flag=true;
    this.service.getTodo(par.todoId).subscribe((data)=>{
      this.change=data;
    })

  }
  deleteTask(par:todo){
this.service.deleteTodo(par.todoId).subscribe(()=>{
  alert("deleted succesfully")
})
  }

  submit(){
    this.flag=false;
    this.service.editTodo(this.change.todoId,this.change).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
