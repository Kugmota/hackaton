import { Component, OnInit } from '@angular/core';
import { Info } from '../register/info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public inf: Info;
  public listOfInfo: Array<Info>;

  constructor() { 
    this.inf = new Info();
    this.listOfInfo = new Array<Info>();
  }

  ngOnInit() {
  }

}
