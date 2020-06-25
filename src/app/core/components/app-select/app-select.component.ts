import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.css']
})
export class AppSelectComponent implements OnInit {
  techs = new FormControl();
  nameTechs: any = ["Angular", "React", "Vue"];
  angularList: Post[];
  reactList: Post[];
  vueList: Post[];
  selectedTech: string = '';
  inf: Post = {};

  constructor(private _postService: PostsService) { }


  ngOnInit(): void {
    // this._postService.getPostVue()
    //   .subscribe(data => {
    //     this.vueList = data;
    //     console.log(this.vueList);
    //     console.log("API VUE");
    //   })
  }

  changeSelect(event: any) {

    this.selectedTech = event.target.value;

    console.log(this.selectedTech);
    if (this.selectedTech === "Angular") {
      console.log(this.selectedTech + ' VALOR TECH');
      this.getDataAngular();
    } else if (this.selectedTech === "React") {
      this.getDataReact();
      console.log(this.selectedTech + ' VALOR TECH');
    } else {
      this.getDataVue();
    }
  }

  getDataAngular() {
    this._postService.getPostAngular()
      .subscribe((data: Post) => {
        this.inf = data;
        console.log(this.inf.author);
        console.log("API ANGULAR");
      })
  }

  getDataReact() {
    this._postService.getPostReact()
      .subscribe(data => {
        this.reactList = data;
        console.log(this.reactList);
        console.log("API REACT");
      })
  }

  getDataVue() {
    this._postService.getPostReact()
      .subscribe(data => {
        this.reactList = data;
        console.log(this.reactList);
        console.log("API VUE");
      })
  }

}
