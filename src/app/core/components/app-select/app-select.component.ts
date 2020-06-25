import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';


@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.css']
})
export class AppSelectComponent implements OnInit {

  nameTechs: any = ['Angular', 'React', 'Vue'];
  angularList: Post[];
  reactList: Post[];
  vueList: Post[];

  constructor(private _postService: PostsService) { }


  ngOnInit(): void {
    this._postService.getPostAngular()
      .subscribe(data => {
        this.angularList = data;
        console.log(this.angularList);
        console.log("API ANGULAR");
      })

    // this._postService.getPostReact()
    //   .subscribe(data => {
    //     this.reactList = data;
    //     console.log(this.reactList);
    //     console.log("API REACT");
    //   })

    // this._postService.getPostVue()
    //   .subscribe(data => {
    //     this.vueList = data;
    //     console.log(this.vueList);
    //     console.log("API VUE");
    //   })
  }

  changeSelect(e) {

    console.log("algooooooooo");
    if (e == "Angular") {
      console.log(e + 'VALOR e');
    }
  }

}
