import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Platform, LoadingController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

const TOKEN_KEY = "auth-token";
const apiEndPoint = "";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  loginErrorMessage = new BehaviorSubject("");

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
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login() {
    return this.storage.set(TOKEN_KEY, "user123").then(() => this.authenticationState.next(true));   
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
