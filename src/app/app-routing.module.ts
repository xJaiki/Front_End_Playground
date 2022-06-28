import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { InfoComponent } from './features/info/info.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "home",
},{
  path: "home",
  component: HomeComponent,
},{
  path: "info",
  component: InfoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
