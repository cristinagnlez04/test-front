import { Component, OnInit } from '@angular/core';
import { SelectService } from 'src/app/shared/services/select.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './app-posts.component.html',
  styleUrls: ['./app-posts.component.css']
})
export class AppPostsComponent implements OnInit {
  selectedOption: any;
  postList: Post;

  constructor(private _selectService: SelectService, private _postsService: PostsService, private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this._selectService.currentOption
      .subscribe((option: any) => {
        this.selectedOption = option;
        console.log(this.selectedOption);
        this.getDataPosts(this.selectedOption, 0);
      });
  }


  getDataPosts(option: string, pageNumber: any) {
    this._postsService.getPosts(option, pageNumber)
      .subscribe((data: any) => {
        data.hits = data.hits.filter(this.validateData);
        this.postList = data.hits;
        console.log(this.postList);
      })
  }

  validateData(elemento) {
    if ((elemento.author !== "" && elemento.author !== null)
      && (elemento.story_title !== "" && elemento.story_title !== null)
      && (elemento.story_url !== "" && elemento.story_url !== null)
      && (elemento.created_at !== "" && elemento.created_at !== null)
      && (elemento.objectID !== "" && elemento.objectID !== null)) {
      return elemento;
    } else {
      console.log(elemento + "Error element");
    }
  }

  saveFavoritePost(post) {
    let postJson = JSON.stringify(post);
    let response = this._localStorageService.savePostAsFavorite(post.objectID, postJson);

    if (response == 'success') {
      console.log("Corazón rojo");
    } else {

      console.log("Corazón blanco");
    }

    console.log(post.objectID + " ObjectID");
    console.log(post + " post");
  }

  removeFavoritePost(post) {
    let response = this._localStorageService.removePostAsFavorite(post.objectID);

    if (response == 'error') {
      console.log("Corazón blanco");

    } else {
      console.log("Corazón rojo");
    }

  }

}
