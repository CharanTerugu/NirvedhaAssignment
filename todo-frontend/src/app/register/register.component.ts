import { Component } from '@angular/core';
import { Signup } from '../signup';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

register:Signup={} as Signup;

constructor(private service:RegisterserviceService){

}

create(){
  this.service.register(this.register).subscribe((data)=>{
    alert("registeration succesfully")
  });
  
}
}
