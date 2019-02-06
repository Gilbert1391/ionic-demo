import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.pop();
  }

  ngOnInit() {}
}
