import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Clothes } from '../../models/clothes';

@Component({
  selector: 'app-clothing-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './clothing-card.component.html',
  styleUrl: './clothing-card.component.scss',
})
export class ClothingCardComponent {
  // @Input({ required: true }) clothing?: Clothes => Utilizado quando queremos a passagem do objeto como propriedade seja obrigatória para o componente pai.
  @Input() clothing?: Clothes = {
    title: 'Default Clothing',
    subtitle: 'For N/A',
    size: 'N/A',
    imageLink:
      'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg',
    price: 0,
    description: `Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis.`,
  };
}
