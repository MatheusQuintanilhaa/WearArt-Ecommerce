import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './components/header/header.component';
import { ClothesCatalogComponent } from './pages/clothes-catalog/clothes-catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { ClotheFormComponent } from './pages/clothes-form/clothe-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ClothesCatalogComponent,
    MatSidenavModule,
    CartComponent,
    ClotheFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clothes-ecommerce';
}
