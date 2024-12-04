import { Routes } from '@angular/router';
import { ClothesCatalogComponent } from './pages/clothes-catalog/clothes-catalog.component';
import { ClotheFormComponent } from './pages/clothes-form/clothe-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clothes', component: ClothesCatalogComponent },
  { path: '', redirectTo: 'clothes', pathMatch: 'full' },
  { path: 'form', component: ClotheFormComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
];
