import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

const apiEndPoint = "";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  register(user) {
    return this.http.post(apiEndPoint + "/wp/v2/users/register", user);
  }

  checkUsername() {
    return this.http.get(apiEndPoint + "/wp/v2/users");
  }
}
