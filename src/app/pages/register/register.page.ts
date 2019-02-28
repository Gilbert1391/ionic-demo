import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NavController, LoadingController } from "@ionic/angular";
import { UsersService } from "../../services/users.service";
import { AuthenticationService } from "../../services/authentication.service";
import { UsernameValidators } from "../../common/validators/username.validators";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private userService: UsersService,
    private authService: AuthenticationService,
    private usernameValidators: UsernameValidators
  ) {}

  errorMessage: string;

  form = new FormGroup({
    username: new FormControl(
      "",
      [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
      this.usernameValidators.shouldBeUnique.bind(this.usernameValidators)
    ),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.maxLength(50)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])
  });

  goBack() {
    this.navCtrl.pop();
  }

  onSubmit(form) {
    this.userService.register(form.value).subscribe(
      res => {
        console.log(res);
        this.authService.login(
          form.controls.username.value,
          form.controls.password.value
        );
      },
      ex => {
        console.log(ex);
        this.errorMessage = ex.error.message;
      }
    );
  }

  ngOnInit() {}
}
