import { Component, OnInit } from '@angular/core';
import { Posts } from './model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public values = new Posts

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.values)
  }

}
