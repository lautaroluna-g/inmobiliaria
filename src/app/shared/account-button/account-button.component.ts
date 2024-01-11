import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Option } from '../interface/option.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'account-button',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './account-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountButtonComponent { 

  public options: Option[] = [
    {
      title: 'Tu perfil',
      link: '/perfil'
    },
    {
      title: 'Configuración',
      link: '/ventas'
    },
    {
      title: 'Salir',
      link: '/alquileres'
    },
  ]

  private _activate: boolean = false

  get activate():boolean {
    return this._activate
  }

  public toggleActivate():void {
    this._activate = !this._activate
  }

}
