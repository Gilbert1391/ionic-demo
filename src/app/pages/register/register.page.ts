import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NavController, LoadingController } from "@ionic/angular";
import { UsersService } from "../../services/users.service";
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
    private usernameValidators: UsernameValidators,
    private loadingController: LoadingController
  ) {}

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
    console.log(form.value);
    this.userService.checkUsername(form);
    // this.userService.register(form.value);
  }

  ngOnInit() {}
}
