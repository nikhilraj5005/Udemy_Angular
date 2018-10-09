import { Component } from '@angular/core';

import  {FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title :"Title",
    isFavorite : true
}

onFavoriteChanged(eventsArg: FavoriteChangedEventArgs) {
    console.log("Favorite Changed :", eventsArg);
  }

}
