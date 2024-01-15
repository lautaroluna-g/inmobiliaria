export interface InmuebleCard {
    title: string,
    img: string[],
    ubicacion: string,
    precio: number,
    moneda: Moneda,
    tipo: TipoInmueble
    isVenta: boolean,
    cantDormitorios: number,
    cantBanios: number,
    metros: number
}

export enum TipoInmueble {
    Lote = "Lote",
    Departamento = "Departamento",
    Chalet = "Chalet",
    Duplex = "Duplex",
    Casa = "Casa",
    Oficina = "Oficina"
}

export enum Moneda {
    ARS,
    USD,
    EUR,
    REA
}