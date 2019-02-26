import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController
  ) {}

  errorMessage = this.authService.errorMessage;

  onSubmit(form) {
    this.authService.login(form.value.username, form.value.password);
  }

  goBack() {
    this.navCtrl.pop();
  }

  ngOnInit() {}
}
