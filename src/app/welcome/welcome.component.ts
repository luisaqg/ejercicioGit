import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  faPaperPlane = faPaperPlane;

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  Iniciar(): void{
    this._router.navigate(['/autos']);
  }
}
