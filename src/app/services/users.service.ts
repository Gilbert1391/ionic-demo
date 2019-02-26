import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";
import { AbstractControl, ValidationErrors } from "@angular/forms";
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
    console.log(user);
    this.http
      .post(apiEndPoint + "/wp/v2/users/register", {
        username: user.username,
        email: user.email,
        password: user.password
      })
      .subscribe(
        res => {
          console.log(res);
          this.authService.login(user.username, user.password);
        },
        ex => console.log(ex)
      );
  }

  checkUsername(form) {
    this.http.get(apiEndPoint + "/wp/v2/users");
  }

  // checkUsername(form) {
  //   const username = form.controls.username.value;
  //   this.http.get(apiEndPoint + "/wp/v2/users").subscribe(
  //     (res: any) => {
  //       console.log(res.find(user => user.name === username));
  //     },
  //     ex => {
  //       console.log(ex);
  //     }
  //   );
  // }
}
