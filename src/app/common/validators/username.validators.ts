import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { UsersService } from "../../services/users.service";

@Injectable({
  providedIn: "root"
})
export class UsernameValidators {
  constructor(private userService: UsersService) {}

  shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "admin") {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  // shouldBeUnique(
  //   control: AbstractControl
  // ): Promise<ValidationErrors | null> {
  //   return new Promise((resolve, reject) => {
  //     this.userService.checkUsername
  //   });
  // }
}
