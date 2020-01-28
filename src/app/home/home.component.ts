import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public arrayOfUsers = [];
  public click: boolean = true;
  public unclick: boolean = false;
  public arrayOfPost = [
    { name: "Raymond Jay Yorong", address: "Talamban", age: 20 },
    { name: "Lalaine Garrido", address: "Leyte", age: 19 },
    { name: "Renzy Verano", address: "Masbate", age: 18 },
    { name: "Ma. Judelyn Cabalhao", address: "Tacloban", age: 19 }
  ];
  count = 0;

  constructor() {}

  ngOnInit() {
    this.arrayOfPost.forEach(i => {
      this.arrayOfPost.forEach(j => {
        if (i.address === j.address) {
          this.count += 1;
          if (!this.arrayOfUsers.includes(i)) {
            this.arrayOfUsers.push(i);
          }
        }
      });
    });
  }
  showDetails(value) {
    this.click = false;
    this.unclick = true;
  }

  onExit() {
    this.click = true;
    this.unclick = false;
  }


}
