import { Pipe, type PipeTransform } from '@angular/core';
import { TipoInmueble } from '../../interfaces/card-inmueble.interface';

@Pipe({
  name: 'tipoInmueble',
  standalone: true,
})
export class TipoInmueblePipe implements PipeTransform {

  transform(value?: TipoInmueble):string{

    switch(value){
      case TipoInmueble.Casa:
        return 'home'
  
      case TipoInmueble.Departamento:
        return 'apartment'

      case TipoInmueble.Chalet:
        return 'chalet'

      case TipoInmueble.Duplex:
        return 'other_houses'
      case TipoInmueble.Oficina:
        return 'work'
      case TipoInmueble.Lote:
        return 'select_all'
      default: 
        return 'error'



    }
  } 


}
