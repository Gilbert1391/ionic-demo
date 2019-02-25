import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";
import { AuthenticationService } from "./authentication.service";

const apiEndPoint = "https://monkey.com.do/wpapi/wp-json";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private loadingController: LoadingController
  ) {}

  register(user) {
    this.http
      .post(apiEndPoint + "/wp/v2/users/register", {
        username: user.username,
        email: user.email,
        password: user.password
      })
      .subscribe(
        res => {
          console.log(res);
          this.doLogin(user.username, user.password);
        },
        ex => console.log(ex)
      );
  }

  async doLogin(username, password) {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: "Please wait..."
    });

    loading.present();

    this.http
      .post(apiEndPoint + "/jwt-auth/v1/token", {
        username,
        password
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
        }
      );
  }
}
