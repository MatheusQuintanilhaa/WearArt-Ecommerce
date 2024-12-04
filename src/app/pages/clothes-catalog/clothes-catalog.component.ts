import { Component, EventEmitter, inject, Output } from '@angular/core';

import { Clothes } from '../../models/clothes';
import { ClothingCardComponent } from '../../components/clothing-card/clothing-card.component';
import { ClotheService } from '../../services/clothe.service';

@Component({
  selector: 'app-clothes-catalog',
  standalone: true,
  imports: [ClothingCardComponent],
  templateUrl: './clothes-catalog.component.html',
  styleUrl: './clothes-catalog.component.scss',
})
export class ClothesCatalogComponent {
  private clothesService: ClotheService;
  clothesArray: Clothes[] = [];

  constructor() {
    this.clothesService = inject(ClotheService);

    this.clothesService.getAllClothes().subscribe((clothesArray: Clothes[]) => {
      this.clothesArray = clothesArray;
    });
  }
}
