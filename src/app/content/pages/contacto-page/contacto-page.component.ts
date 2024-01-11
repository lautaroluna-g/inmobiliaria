import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'contacto-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './contacto-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContactoPageComponent { }
