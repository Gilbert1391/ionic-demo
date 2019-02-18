import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private service: AuthenticationService) {}
  username: string;
  password: string;

  login() {
    this.service.login();
  }

  logout() {
    this.service.logout();
  }

  ngOnInit() {
    //console.log("Checking");
  }
}
