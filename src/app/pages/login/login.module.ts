import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { LoginPage } from "./login.page";

const routes: Routes = [
  {
    path: "",
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
