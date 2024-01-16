import { Injectable } from '@angular/core';
import { InmuebleCard, Moneda, TipoInmueble } from '../interfaces/card-inmueble.interface';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  private _propiedades: InmuebleCard[] = [
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
    },{
      title: "Moderno Loft",
      img: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Avenida Siempreviva 742, Springfield",
      precio: 85000,
      moneda: Moneda.USD,
      tipo: TipoInmueble.Departamento,
      isVenta: true,
      cantDormitorios: 1,
      cantBanios: 1,
      metros: 55
    },
    {
      title: "Chalet de Montaña",
      img: [
        "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Camino al Cielo 123, Villa La Angostura",
      precio: 120000,
      moneda: Moneda.USD,
      tipo: TipoInmueble.Chalet,
      isVenta: true,
      cantDormitorios: 3,
      cantBanios: 2,
      metros: 120
    },
    {
      title: "Penthouse de Lujo",
      img: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Boulevard del Río 456, Buenos Aires",
      precio: 500000,
      moneda: Moneda.USD,
      tipo: TipoInmueble.Departamento,
      isVenta: true,
      cantDormitorios: 4,
      cantBanios: 3,
      metros: 200
    },
    {
      title: "Oficina Céntrica",
      img: [
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1531497865148-555b2c5f3e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Avenida Corrientes 1234, CABA",
      precio: 420000,
      moneda: Moneda.ARS,
      tipo: TipoInmueble.Oficina,
      isVenta: false,
      cantDormitorios: 0, // En oficinas, podría no aplicar la cantidad de dormitorios
      cantBanios: 2,
      metros: 100
    },{
      title: "Estudio en el Centro",
      img: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Calle Falsa 123, Ciudad Gótica",
      precio: 75000,
      moneda: Moneda.USD,
      tipo: TipoInmueble.Departamento,
      isVenta: false,
      cantDormitorios: 0,
      cantBanios: 1,
      metros: 30
    },
    {
      title: "Duplex Espacioso",
      img: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Avenida Siempre Viva 742, Springfield",
      precio: 190000,
      moneda: Moneda.USD,
      tipo: TipoInmueble.Duplex,
      isVenta: true,
      cantDormitorios: 3,
      cantBanios: 2,
      metros: 120
    },
    {
      title: "Loft Industrial",
      img: [
        "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Distrito Industrial 409, Metrópolis",
      precio: 220000,
      moneda: Moneda.ARS,
      tipo: TipoInmueble.Departamento,
      isVenta: false,
      cantDormitorios: 1,
      cantBanios: 1,
      metros: 85
    },
    {
      title: "Oficina Premium",
      img: [
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1531497865148-555b2c5f3e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Plaza Central 300, Ciudad Gótica",
      precio: 350000,
      moneda: Moneda.USD,
      tipo: TipoInmueble.Oficina,
      isVenta: false,
      cantDormitorios: 0, // No aplicable para oficinas
      cantBanios: 4,
      metros: 200
    },
    {
      title: "Cabaña en la Montaña",
      img: [
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      ],
      ubicacion: "Camino al Bosque 1000, Sierra Nevada",
      precio: 175000,
      moneda: Moneda.ARS,
      tipo: TipoInmueble.Casa,
      isVenta: true,
      cantDormitorios: 2,
      cantBanios: 2,
      metros: 150
    }
  ]



  get propiedades(): InmuebleCard[]{
    return this._propiedades
  }

}
