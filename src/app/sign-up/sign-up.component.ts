import { Parser } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent {

  constructor(private rout: Router) { }

  Dataarr: any[] = [{firstname: 'sai', lastname: 'sai', email: 'sai@gmail.com', password: 'c2FpMTIz'}];
  first = "";
  last = "";
  email = "";
  passwor = "";

  signIn = true;

  signinForm = new FormGroup(
    {
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    }
  )

  singupForm = new FormGroup({
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.maxLength(8))
  })

  show(){
    this.signIn = false;
    console.log(this.signIn);
  }

  hide(){
    this.signIn = true;
    console.log(this.signIn);
  }


  onSignup() {
    let enpassword = "password";
    if (this.singupForm.value.password) {
      enpassword = this.singupForm.value.password;
    }
    let depassword = btoa(enpassword);
    this.singupForm.value.password = depassword;
    console.log(atob(depassword));
    let val = this.singupForm.value;
    console.log(val);
    this.Dataarr.push(val);
    this.singupForm.reset();
  }

  onSignin() {
    for (let key in this.Dataarr) {
      console.log(atob(this.Dataarr[key].password))
      if (this.signinForm.value.Email == this.Dataarr[key].email && 
        this.signinForm.value.Password == atob(this.Dataarr[key].password)) {
        
        this.rout.navigateByUrl('mainpage');
      }
    }
  }

}


