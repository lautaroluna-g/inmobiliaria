import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'not-found-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule
  ],
  templateUrl: './not-found-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent { }
