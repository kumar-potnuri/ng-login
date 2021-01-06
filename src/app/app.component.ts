import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  log_email:String;
  log_password:String;
  reg_email:String;
  reg_password:String;
  reg_confirm_paasword:String;
   
  login(){
    if(this.log_email =="admin" && this.log_password =="admin"){
      console.log("success");
    } else{
      console.log("fail");

    }

  }
  register(){

  }
}
