import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { InmuebleCard, Moneda, TipoInmueble } from '../../interfaces/card-inmueble.interface';
import { InmueblesService } from '../../services/inmuebles.service';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    CarouselComponent
  ],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{

  inmuebleService = inject(InmueblesService)

  ngOnInit(): void {
    this.propiedades= this.inmuebleService.propiedades
  } 

public propiedades?: InmuebleCard[]

}
