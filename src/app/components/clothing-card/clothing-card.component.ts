import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Clothes } from '../../models/clothes';

@Component({
  selector: 'app-clothing-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, CommonModule],
  templateUrl: './clothing-card.component.html',
  styleUrl: './clothing-card.component.scss',
})
export class ClothingCardComponent {
  // @Input({ required: true }) clothing?: Clothes => Utilizado quando queremos a passagem do objeto como propriedade seja obrigatória para o componente pai.
  @Input() clothing?: Clothes = {
    id: 0,
    title: 'Default Clothing',
    subtitle: 'For N/A',
    size: 'N/A',
    imageLink:
      'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg',
    price: 0,
    description: `Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis.`,
  };
  @Output() warnClothesCatalog: EventEmitter<Clothes> = new EventEmitter();

  warnParentAboutItemAddition(clothing: Clothes) {
    console.log(`Avisa que selecionei o ${clothing.title}`);
    this.warnClothesCatalog.emit(clothing);
  }
}
