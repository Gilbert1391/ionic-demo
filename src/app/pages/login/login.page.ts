import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthenticationService) {}

  onSubmit(form) {
    console.log(form.value);
    this.authService.login(form.value.username, form.value.password);
  }

  ngOnInit() {}
}
