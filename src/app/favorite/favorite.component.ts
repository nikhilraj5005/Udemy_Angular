import { Component, OnInit , Input , Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue : this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs {

  newValue:boolean;
}