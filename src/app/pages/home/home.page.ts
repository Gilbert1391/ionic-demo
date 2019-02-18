import { Component, OnInit } from "@angular/core";

const api = "https://jsonplaceholder.typicode.com/users";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  getUsers() {}
}
