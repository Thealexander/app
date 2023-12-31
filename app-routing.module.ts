import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { HomeComponent } from './home/home/home.component';
import { SeguridadGuard } from './Seguridad/seguridad.router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SeguridadGuard] },
  { path: 'books', component: BooksComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
