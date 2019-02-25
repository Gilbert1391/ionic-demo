import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "welcome",
    loadChildren: "./pages/welcome/welcome.module#WelcomePageModule"
  },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "register",
    loadChildren: "./pages/register/register.module#RegisterPageModule"
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    loadChildren: "./pages/home/home.module#HomePageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
