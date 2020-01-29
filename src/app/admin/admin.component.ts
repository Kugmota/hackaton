import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public submit : boolean=true;
  public cancel : boolean=false;
  public arrayOfPost = [
    { name: "Raymond Jay Yorong", address: "Talamban", age: 20 },
    { name: "Lalaine Garrido", address: "Leyte", age: 19 },
    { name: "Renzy Verano", address: "Masbate", age: 18 },
    { name: "Ma. Judelyn Cabalhao", address: "Tacloban", age: 19 }
  ];
  public arrayOfUsers = [];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submit=false;
    this.cancel=true
  }

  onCancel(){
    this.submit=true;
    this.cancel=false
  }


}
