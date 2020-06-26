import { Component, OnInit } from '@angular/core';
import { SelectService } from 'src/app/shared/services/select.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './app-posts.component.html',
  styleUrls: ['./app-posts.component.css']
})
export class AppPostsComponent implements OnInit {
  selectedOption: any;
  postList: Post;

  constructor(private _selectService: SelectService, private _postsService: PostsService) { }

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
      console.log(elemento + " ELEMENTO");
      return elemento;
    } else {
      console.log(elemento + " error elemento");
    }
  }


}
