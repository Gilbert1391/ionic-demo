import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(private service: AuthenticationService) {}

  ngOnInit() {}

  logout() {
    console.log("Logging out user");
    this.service.logout();
  }
}
