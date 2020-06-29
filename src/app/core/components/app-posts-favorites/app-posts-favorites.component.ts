import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Component({
  selector: 'app-posts-favorites',
  templateUrl: './app-posts-favorites.component.html',
  styleUrls: ['./app-posts-favorites.component.css']
})
export class AppPostsFavoritesComponent implements OnInit {

  postList: any;
  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.postList = this._localStorageService.loadPostFavorite();
  }

  removeFavoritePost(post) {
    let response = this._localStorageService.removePostAsFavorite(post.objectID);

    if (response == 'success') {
      this.loadFavorites();

    } else {
      console.log("error");
    }
  }




}
