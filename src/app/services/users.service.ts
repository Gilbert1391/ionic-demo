import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

const apiEndPoint = "https://monkey.com.do/wpapi/wp-json/wp/v2/users/register";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  register(user) {
    this.http
      .post(apiEndPoint, {
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
}
