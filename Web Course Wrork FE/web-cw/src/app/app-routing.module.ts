import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './inventory/catalog/catalog.component';
import { ItemDetailsComponent } from './inventory/item-details/item-details.component';
import { ItemEditComponent } from './inventory/item-edit/item-edit.component';
import { ItemNewComponent } from './inventory/item-new/item-new.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { IsLoggedGuard } from './shared/is-logged.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "reset/:id", component: ResetPasswordComponent},
  {path: "catalog", component: CatalogComponent, canActivate: [IsLoggedGuard]},
  {path: "details/:id", component: ItemDetailsComponent, canActivate: [IsLoggedGuard]},
  {path: "edit/:id", component: ItemEditComponent, canActivate: [IsLoggedGuard]},
  {path: "new", component: ItemNewComponent, canActivate: [IsLoggedGuard]},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
