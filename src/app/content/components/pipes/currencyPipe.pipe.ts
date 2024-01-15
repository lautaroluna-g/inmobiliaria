import { Pipe, type PipeTransform } from '@angular/core';
import { Moneda } from '../../interfaces/card-inmueble.interface';

@Pipe({
  name: 'currencyPipe',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {

  transform(value?: number){
    if(value)
      return Moneda[value]
    return 'N/C'
  }

}
