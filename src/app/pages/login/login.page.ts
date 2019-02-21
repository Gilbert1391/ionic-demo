import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private service: AuthenticationService) {}

  onSubmit(form) {
    console.log(form);
    this.service.login(form.value.username, form.value.password);
    // this.service.login();
  }

  ngOnInit() {}
}
