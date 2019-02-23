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
    this.authService.getUser();
    // this.authService.login(form.value.username, form.value.password);
    // console.log(this.authService.isAuthenticated());
  }

  ngOnInit() {}
}
