import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { Clothes } from '../../models/clothes';
import { CartService } from '../../services/cart.service';

import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-clothing-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, CommonModule],
  templateUrl: './clothing-card.component.html',
  styleUrl: './clothing-card.component.scss',
})
export class ClothingCardComponent {
  @Input() clothes?: Clothes = {
    id: 0,
    title: 'productName',
    subtitle: 'For N/A',
    size: 'N/A',
    imageLink:
      'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg',
    price: 0,
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé, boa gentis num é.',
    availableInStock: 10,
  };

  constructor(private cartService: CartService) {
    // this.cartService = new CartService(); -> NÃO VOU FAZER ISSO
  }

  isExternalImage(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }

  addClotheToCart(clothes: Clothes) {
    console.log(`Adicionei uma roupa ${clothes.title} ao carrinho!`);
    // chamar o método do service responsável por adicionar uma roupa ao carrinho
    this.cartService.addItemToCart(clothes);
  }

  // removeItem(clothes: Clothes) {
  //   this.cartService.removeItemFromCart(clothes);
  //   console.log(`Removi a roupa ${clothes.title} do carrinho!`);
  // }
}
