import { Component } from '@angular/core';
import { Clothes } from '../../models/clothes';
import { ClothingCardComponent } from '../../components/clothing-card/clothing-card.component';

@Component({
  selector: 'app-clothes-catalog',
  standalone: true,
  imports: [ClothingCardComponent],
  templateUrl: './clothes-catalog.component.html',
  styleUrl: './clothes-catalog.component.scss',
})
export class ClothesCatalogComponent {
  clothesArray: Clothes[] = [
    {
      title: 'Papú',
      subtitle: 'Expressa sua personalidade com estilo.',
      size: 'G',
      imageLink: '../../../assets/estampa1.jpg',
      price: 59.99,
      description: 'Estampa desenvolvida para estúdios, vendida para Papú',
    },
    {
      title: 'Blessrio',
      subtitle: 'Expressa sua personalidade com individualidade.',
      size: 'M',
      imageLink: '../../../assets/estampa2.jpg',
      price: 29.7,
      description: 'Estampa desenvolvida para estúdios, vendida para Papú',
    },
  ];
}
