import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './components/header/header.component';
import { ClothesCatalogComponent } from './pages/clothes-catalog/clothes-catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItem } from './models/cart-item';
import { Clothes } from './models/clothes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ClothesCatalogComponent,
    MatSidenavModule,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WearArt-ecommerce';
  cartItemsArray: CartItem[] = [];

  addItemToCart(clothing: Clothes) {
    const foundIndex: number = this.cartItemsArray.findIndex((item) => {
      return item.product.id === clothing.id;
    });

    if (foundIndex == -1) {
      this.cartItemsArray.push({
        product: clothing,
        quantity: 1,
      });
    } else {
      this.cartItemsArray[foundIndex].quantity++;
    }

    console.log(this.cartItemsArray);
  }
}
