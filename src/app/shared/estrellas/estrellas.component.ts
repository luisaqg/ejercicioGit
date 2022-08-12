import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {

  faStar = faStar;
  starsList: any[] = [];

  @Input() calificacion: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.starsList = [];
    for (var i=1; i<=this.calificacion; i++) {
      this.starsList.push(1);
      console.log(this.starsList);
    }
  }

}
