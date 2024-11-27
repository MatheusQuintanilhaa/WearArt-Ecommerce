import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() warnApp: EventEmitter<Clothes> = new EventEmitter();

  clothesArray: Clothes[] = [
    {
      id: 1,
      title: 'Papú',
      subtitle: 'Expressa sua personalidade com estilo.',
      size: 'G',
      imageLink: '../../../assets/estampa1.jpg',
      price: 59.99,
      description: 'Estampa desenvolvida para estúdios, vendida para Papú',
    },
    {
      id: 2,
      title: 'Blessrio',
      subtitle: 'Expressa sua personalidade com individualidade.',
      size: 'M',
      imageLink: '../../../assets/estampa2.jpg',
      price: 29.7,
      description: 'Estampa desenvolvida para estúdios, vendida para Papú',
    },
    {
      id: 3,
      title: 'Use Marine',
      subtitle: 'Expressa sua personalidade.',
      size: 'M',
      imageLink: '../../../assets/estampa3.jpg',
      price: 144.9,
      description:
        'Estampa desenvolvida para estúdios, vendida para Use Marine',
    },
  ];

  warnParentAboutItemAddition(clothing: Clothes) {
    console.log(`Este item esta sendo selecionado ${clothing.title}`);

    this.warnApp.emit(clothing);
  }
}
