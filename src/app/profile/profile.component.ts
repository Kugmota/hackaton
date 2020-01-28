import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public edit: boolean = true;
  public cancel: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.edit=false;
    this.cancel=true
  }

  onCancel(){
    this.edit=true;
    this.cancel=false;
  }
}
