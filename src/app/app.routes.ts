import { Routes } from '@angular/router';
import { ClothesCatalogComponent } from './pages/clothes-catalog/clothes-catalog.component';
import { ClotheFormComponent } from './pages/clothes-form/clothe-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clothes', pathMatch: 'full' },
  { path: 'clothes', component: ClothesCatalogComponent },
  { path: 'form', component: ClotheFormComponent },
  { path: '**', component: NotFoundComponent },
];
