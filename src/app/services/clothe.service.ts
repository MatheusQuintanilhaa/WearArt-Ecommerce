import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Clothes } from '../models/clothes';

@Injectable({
  providedIn: 'root',
})
export class ClotheService {
  http: HttpClient;
  clothesArray: Clothes[] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  getAllGames() {
    return this.http.get<Clothes[]>('http://localhost:3000/clothes');
  }

  createClothe(newClothe: Clothes) {
    return this.http.post<Clothes[]>(
      'http://localhost:3000/clothes',
      newClothe
    );
  }
}
