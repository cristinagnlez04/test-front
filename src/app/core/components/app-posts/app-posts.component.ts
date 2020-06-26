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
  inf: Post;

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
      .subscribe((data: Post) => {
        this.inf = data;
        console.log(this.inf.hits[0].story_url);
      })
  }

}
