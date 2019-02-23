import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Platform } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

const TOKEN_KEY = "auth-token";
const apiEndPoint = "http://localhost:3000/api";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    private http: HttpClient
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

  // login(email, password) {
  //   console.log("Authenticating...");
  //   this.http
  //     .post(
  //       apiEndPoint + "/auth",
  //       { email, password },
  //       { responseType: "text" }
  //     )
  //     .subscribe(
  //       res => {
  //         this.storage.set(TOKEN_KEY, res).then(() => {
  //           this.authenticationState.next(true);
  //         });
  //       },
  //       ex => {
  //         alert(ex.error);
  //       }
  //     );
  // }

  getUser() {
    this.http
      .get("https://monkey.com.do/api/user/get_userinfo/?user_id=1")
      .subscribe(res => {
        console.log(res);
      });
  }

  login(email, password) {
    this.http
      .post("https://monkey.com.do/api/user/generate_auth_cookie", {
        email,
        password
      })
      .subscribe(res => console.log(res));
    // return this.storage.set(TOKEN_KEY, "Bearer 1234567").then(() => {
    //   this.authenticationState.next(true);
    // });
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
