import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Login } from '../Login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:Login={} as Login;
constructor(private service:LoginserviceService,private router:Router){

}
  submit(){
    console.log(this.user)
this.service.login(this.user).subscribe((data)=>{
  localStorage.setItem('token',data)
this.router.navigate(['user/todo'])
 
},error=>{console.log(error)})


  }
}
