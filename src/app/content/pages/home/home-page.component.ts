import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { InmuebleCard, Moneda, TipoInmueble } from '../../interfaces/card-inmueble.interface';

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
export class HomePageComponent { 

propiedades: InmuebleCard[] = [
  {
    title: "Departamento super cool",
    img: [
     "https://www.zonaprop.com.ar/noticias/wp-content/uploads/2016/08/depto.jpg",
     "https://lajoya.ec/wp-content/uploads/2015/02/LJ-CONDOMINIO-2-SALA-COMEDOR-1108x960.png",
     "https://lajoya.ec/wp-content/uploads/2015/03/LJ-CONDOMINIO-2-DORMITORIO-1108x927.jpg"
    ],
    ubicacion: "San Juan 2065, Mar del Plata",
    precio: 13000,
    moneda: Moneda.USD,
    tipo: TipoInmueble.Departamento,
    isVenta: false,
    cantDormitorios: 2,
    cantBanios: 1,
    metros: 70
  },
  {
    title: "Casa re linda",
    img: [
     "https://definicion.de/wp-content/uploads/2011/01/casa-2.jpg",
     "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg",
    ],
    ubicacion: "Juan B Justo 2002, Mar del Plata",
    precio: 48000,
    moneda: Moneda.USD,
    tipo: TipoInmueble.Casa,
    isVenta: true,
    cantDormitorios: 3,
    cantBanios: 2,
    metros: 140
  },
  {
    title: "Casa medio pelo",
    img: [
     "https://media.gettyimages.com/id/131720047/es/foto/abandonado-house.jpg?s=612x612&w=gi&k=20&c=I9Q1CSs7nltqz8Z78CWtWkCsTcT7aqup8V9gq6ua-p4=",
     "https://www.shutterstock.com/image-photo/old-ugly-abandoned-empty-kitchen-600nw-1764844172.jpg",
     "https://media.istockphoto.com/id/1460234451/es/foto/interior-de-una-casa-abandonada-en-la-zona-de-exclusi%C3%B3n-de-chern%C3%B3bil-que-rodea-la-central.jpg?s=612x612&w=0&k=20&c=Si81Wbe8YzY0idY8FfB1g2a4I2ILI251GhyKVq9T_Pk="
    ],
    ubicacion: "Constitución 4500, Mar del Plata",
    precio: 500,
    moneda: Moneda.USD,
    tipo: TipoInmueble.Casa,
    isVenta: true,
    cantDormitorios: 2,
    cantBanios: 1,
    metros: 80
  },
  {
    title: "Globant tower",
    img: [
     "https://stayrelevant.globant.com/wp-content/uploads/2023/01/P1050597-1.jpg",
     "https://stayrelevant.globant.com/wp-content/uploads/2023/01/20220603_075402-1-scaled.jpg",
     "https://stayrelevant.globant.com/wp-content/uploads/2023/01/P1300690-1-scaled.jpg",
     "https://stayrelevant.globant.com/wp-content/uploads/2023/01/P1300642-1-scaled.jpg"
    ],
    ubicacion: "Carlos M. Della Paolera 261, CABA",
    precio: 300000,
    moneda: Moneda.USD,
    tipo: TipoInmueble.Oficina,
    isVenta: true,
    cantDormitorios: 10,
    cantBanios: 6,
    metros: 640
  },
]

}
