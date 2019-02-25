import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "../../services/authentication.service";

const apiEndPoint = "https://monkey.com.do/wpapi/wp-json/jwt-auth/v1/token";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  errorMessage: string;

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient,
    private navCtrl: NavController,
    private loadingController: LoadingController
  ) {}

  async onSubmit(form) {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: "Please wait..."
    });

    loading.present();

    this.http
      .post(apiEndPoint, {
        username: form.value.username,
        password: form.value.password
      })
      .subscribe(
        res => {
          console.log(res);
          loading.dismiss();
          this.authService.login(res["token"]);
        },
        ex => {
          loading.dismiss();
          console.log(ex);
          this.errorMessage = ex.error.message;
          console.log(this.errorMessage);
        }
      );
  }

  goBack() {
    this.navCtrl.pop();
  }

  ngOnInit() {}
}
