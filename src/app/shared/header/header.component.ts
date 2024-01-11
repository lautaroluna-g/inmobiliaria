import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option } from '../interface/option.interface';
import { RouterModule } from '@angular/router';
import { AccountButtonComponent } from '../account-button/account-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AccountButtonComponent
  ],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  public options: Option[] = [
    {
      title: 'Inicio',
      link: '/home'
    },
    {
      title: 'Ventas',
      link: '/ventas'
    },
    {
      title: 'Alquileres',
      link: '/alquileres'
    },
    {
      title: 'Nosotros',
      link: '/nosotros'
    },
    {
      title: 'Contacto',
      link: '/contacto'
    },
  ]
 }
