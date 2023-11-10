import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cred-verification';
  view = true;

  constructor(private router: Router){}

  singupPage(){
    this.router.navigateByUrl("login");
    this.view = false;
  }
}
