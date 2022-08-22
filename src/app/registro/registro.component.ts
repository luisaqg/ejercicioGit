import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cliente} from "../datos/clientes";

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  tituloPagina = "Registro del cliente";
  cliente = {id: "", nombre: "", password: "", telefono: "", email: ""};
  contacto = false;
  
  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  irInicio(): void {
    this._router.navigate(["/inicio"]);
  }

  Registrarse(): void {
    alert("Cliente registrado de forma exitosa!");
    this._router.navigate(["/autos"]);
  }

}
