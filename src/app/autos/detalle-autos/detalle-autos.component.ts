import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from 'src/app/shared/auto.service';
import { Auto } from 'src/app/datos/autos';
import { faChevronLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  tituloPagina = "Detalle de autos"
  auto: Auto | undefined;

  detalle?: Auto;
  faChevronLeft = faChevronLeft;
  faShoppingCart = faShoppingCart;

  constructor ( private _ActivatedRoute: ActivatedRoute,
    private _router: Router,
    private _autoService: AutoService ) {}

  ngOnInit(): void {
    let id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    this.auto = this._autoService.obtenAuto(id);
  }

  onBack(): void{
    this._router.navigate(['/autos']);
  }

  comprar(): void {
    alert("Compra exitosa!");
}

}
