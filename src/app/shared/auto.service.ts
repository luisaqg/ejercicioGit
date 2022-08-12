import { Injectable } from "@angular/core";
import { Auto } from "../datos/autos";

@Injectable({
    providedIn: "root"
})

export class AutoService{
    listaAutos: Auto[] =[];

    public obtenListaAutos(): Auto[] {
        if (this.listaAutos.length == 0){
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos;
    }

    public obtenAuto(id: number): Auto | undefined {
        if (this.listaAutos.length == 0){
            this.listaAutos = this._determinaListaAutos();
        }

        return this.listaAutos.find(auto => auto.id == id);
    }

    private _determinaListaAutos(): Auto[] {
        this.listaAutos = [{
            id: 1,
            marca: "Chevrolet",
            modelo: "Blazer",
            anio: 2022,
            color: "Blanca",
            kilometros: 20500,
            calificacion: 4.4,
            precio: 2500000,
            imagenUrl: "assets/imageAutos/blazer.jpg"
        },
        {
            id: 2,
            marca: "Ford",
            modelo: "Edge",
            anio: 2018,
            color: "Roja",
            kilometros: 700,
            calificacion: 4,
            precio: 3000000,
            imagenUrl: "assets/imageAutos/edge.jpg"
        },
        {
            id: 3,
            marca: "Ford",
            modelo: "Raptor",
            anio: 2020,
            color: "Azul",
            kilometros: 4500,
            calificacion: 5,
            precio: 2500000,
            imagenUrl: "assets/imageAutos/raptor.jpg"
        },
        {
            id: 4,
            marca: "Mini Cooper",
            modelo: "S-60",
            anio: 2022,
            color: "Negro",
            kilometros: 0,
            calificacion: 2,
            precio: 5250000,
            imagenUrl: "assets/imageAutos/mini.jpg"
        }]
        return this.listaAutos;        
    }
}