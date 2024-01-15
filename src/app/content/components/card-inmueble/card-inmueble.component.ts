import { CommonModule} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { InmuebleCard, TipoInmueble } from '../../interfaces/card-inmueble.interface';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CurrencyPipe } from '../pipes/currencyPipe.pipe';
import { TipoInmueblePipe } from '../pipes/tipoInmueble.pipe';

@Component({
  selector: 'card-inmueble',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule,
    CurrencyPipe,
    TipoInmueblePipe
  ],
  templateUrl: './card-inmueble.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInmuebleComponent{

  @Input({required:true}) content?: InmuebleCard

 }
