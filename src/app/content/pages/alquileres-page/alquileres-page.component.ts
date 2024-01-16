import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { InmuebleCard } from '../../interfaces/card-inmueble.interface';
import { CardInmuebleComponent } from '../../components/card-inmueble/card-inmueble.component';
import { InmueblesService } from '../../services/inmuebles.service';
import { DropdownModule } from 'primeng/dropdown';
import { Ambientes } from '../../interfaces/filtros.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'alquileres-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    CardInmuebleComponent,
    DropdownModule,
    FormsModule
  ],
  templateUrl: './alquileres-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlquileresPageComponent implements OnInit{

  public filtros = {
    ambientes: Object.values(Ambientes),
  }

  selectedAmbiente: Ambientes | undefined;

  inmuebleService = inject(InmueblesService)
  
  ngOnInit(): void {
   this.propiedades = this.inmuebleService.propiedades
  }

  public propiedades?: InmuebleCard[]

 }
