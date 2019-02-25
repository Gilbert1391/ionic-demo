import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Platform, LoadingController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

const TOKEN_KEY = "auth-token";
const apiEndPoint = "https://monkey.com.do/wpapi/wp-json/jwt-auth/v1/token";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    private http: HttpClient,
    private loadingController: LoadingController
  ) {
    // Check if token is stored when the device is ready
    this.plt.ready().then(readySource => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  async login(username, password) {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: "Please wait..."
    });

    loading.present();

    this.http
      .post(apiEndPoint, {
        username,
        password
      })
      .subscribe(
        res => {
          console.log(res["token"]);
          loading.dismiss();
          this.storage
            .set(TOKEN_KEY, res["token"])
            .then(() => this.authenticationState.next(true));
        },
        ex => {
          loading.dismiss();
          console.log(ex);
        }
      );
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
