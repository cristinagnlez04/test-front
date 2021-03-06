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
  notEmptyPost: boolean = true;
  notscrolly: boolean = true;
  selectedOption: any;
  postList = [];
  pageCount = 0;


  constructor(private _selectService: SelectService, private _postsService: PostsService, private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this._selectService.currentOption
      .subscribe((option: any) => {
        this.selectedOption = option;
        this.getDataPosts(this.selectedOption, this.pageCount);
      });
  }


  getDataPosts(option: string, pageNumber: any) {
    this.pageCount = 0;
    this._postsService.getPosts(option, 0)
      .subscribe((data: any) => {
        data.hits = data.hits.filter(this.validateData);
        this.postList = data.hits;
        this.validateExistingFavorite(this.postList);
      })

  }

  validateExistingFavorite(list) {
    let message;

    for (let i = 0; i < list.length; i++) {
      message = this._localStorageService.getPostSaved(list[i].objectID);

      if (message == null) {
        this.postList[i].favorite = false;
      }
      else {
        this.postList[i].favorite = true;
      }
    }
  }

  validateData(elemento) {
    if ((elemento.author !== "" && elemento.author !== null)
      && (elemento.story_title !== "" && elemento.story_title !== null)
      && (elemento.story_url !== "" && elemento.story_url !== null)
      && (elemento.created_at !== "" && elemento.created_at !== null)
      && (elemento.objectID !== "" && elemento.objectID !== null)) {
      return elemento;
    } else {
      console.log(elemento + "Element invalid to show");
    }
  }

  saveFavoritePost(post) {
    let postJson = JSON.stringify(post);
    let response = this._localStorageService.savePostAsFavorite(post.objectID, postJson);

    if (response == 'success') {
      post.favorite = true;
    } else {
      post.favorite = false;
    }

  }

  removeFavoritePost(post) {
    let response = this._localStorageService.removePostAsFavorite(post.objectID);

    if (response == 'success') {
      post.favorite = false;

    } else {
      post.favorite = true;
    }

  }

  openUrl(url) {
    window.open(url, '_blank');
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.notscrolly = false;
      this.loadNextPost();
    }
  }

  loadNextPost() {
    this.pageCount++;
    this.getNextPosts(this.selectedOption, this.pageCount);
  }

  getNextPosts(option: string, pageNumber: any) {
    this._postsService.getPosts(option, pageNumber)
      .subscribe((data: any) => {
        data.hits = data.hits.filter(this.validateData);
        this.postList = this.postList.concat(data.hits);

        if (this.postList.length === 0) {
          this.notEmptyPost = false;
        }

        this.notscrolly = true;
      })


  }

}
