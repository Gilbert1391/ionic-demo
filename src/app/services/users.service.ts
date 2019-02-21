import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const apiEndPoint = "http://localhost:3000/api";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  register(user) {
    this.http
      .post(apiEndPoint + "/users", {
        email: user.username,
        password: user.password,
        name: user.name
      })
      .subscribe(res => console.log(res), ex => console.log(ex));
  }
}
