import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private service: UsersService,
    private loadingController: LoadingController
  ) {}

  goBack() {
    this.navCtrl.pop();
  }

  onSubmit(form) {
    console.log(form.value);
    this.service.register(form.value);
  }

  ngOnInit() {}
}
