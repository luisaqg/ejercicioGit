import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { AutoService } from "src/app/shared/auto.service";
import {Auto} from "../../datos/autos";

@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent implements OnInit{
    tituloListaAutos: string = "Lista de automóviles";
    arregloAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];
    imageWidth = 200;
    imageMargin = 2;
    muestraImagen: boolean = false;
    private _filtro: string ="";
    faStar = faStar;

    constructor(private _autoService:AutoService){
    }

    get filtro(): string{
        return this._filtro;
    }

    set filtro(filtro: string){
        this._filtro = filtro;
        this.filtrarAutos(filtro);
    }

    filtrarAutos(filtrarPor: string): void{
        filtrarPor = filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.arregloAutos.filter(
            (auto: Auto) => auto.marca.toLocaleLowerCase().includes(filtrarPor)
        )
    }

    ngOnInit(): void {
        this.arregloAutos = this._autoService.obtenListaAutos();
        this.listaAutosFiltrados = this.arregloAutos;
    }

    muestraImagenes(): void {
        this.muestraImagen = !this.muestraImagen
    }

}