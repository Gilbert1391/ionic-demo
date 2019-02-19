import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const api = "https://jsonplaceholder.typicode.com/users";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {}
}
