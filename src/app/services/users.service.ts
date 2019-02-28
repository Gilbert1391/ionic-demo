import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

const apiEndPoint = "https://monkey.com.do/wpapi/wp-json";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  // register(user) {
  //   console.log(user);
  //   return this.http
  //     .post(apiEndPoint + "/wp/v2/users/register", {
  //       username: user.username,
  //       email: user.email,
  //       password: user.password
  //     })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.authService.login(user.username, user.password);
  //       },
  //       ex => console.log(ex)
  //     );
  // }

  register(user) {
    return this.http.post(apiEndPoint + "/wp/v2/users/register", user);
  }

  checkUsername() {
    return this.http.get(apiEndPoint + "/wp/v2/users");
  }
}
