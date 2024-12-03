import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClotheService } from '../../services/clothe.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-clothe-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './clothe-form.component.html',
  styleUrl: './clothe-form.component.scss',
})
export class ClotheFormComponent {
  private clotheService: ClotheService;
  private router: Router;
  private snackBar: MatSnackBar;
  clotheForm: FormGroup;

  constructor() {
    this.clotheService = inject(ClotheService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);

    this.clotheForm = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      imageLink: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required]),
      availableInStock: new FormControl(0, [Validators.required]),
    });
  }

  isExternalImage(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }

  submitForm() {
    console.log('Formulário foi submetido!');
    console.log(this.clotheForm.value);

    const clotheData = this.clotheForm.value;

    // Verifica se a URL da imagem é externa, caso contrário, adiciona o caminho para assets
    if (!this.isExternalImage(clotheData.imageLink)) {
      clotheData.imageLink = 'assets/' + clotheData.imageLink;
    }

    this.clotheService.createClothe(clotheData).subscribe({
      next: () => {
        this.snackBar.open(
          'Roupa adicionada ao carrinho com sucesso!',
          'Fechar'
        );
        this.router.navigate(['clothes']);
      },
      error: () => {
        this.snackBar.open(
          'Erro interno do servidor. Contate o suporte para mais informações!',
          'Fechar'
        );
      },
    });
  }
}
