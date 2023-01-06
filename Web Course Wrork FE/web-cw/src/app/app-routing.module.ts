import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './inventory/catalog/catalog.component';
import { ItemDetailsComponent } from './inventory/item-details/item-details.component';
import { ItemEditComponent } from './inventory/item-edit/item-edit.component';
import { ItemNewComponent } from './inventory/item-new/item-new.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "catalog", component: CatalogComponent},
  {path: "details/:id", component: ItemDetailsComponent},
  {path: "edit/:id", component: ItemEditComponent},
  {path: "new", component: ItemNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
