import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';
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


  constructor(private _postService: PostsService) { }


  ngOnInit(): void {


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

  changeSelect(event: any) {

    this.selectedTech = event.target.value;
    console.log("algooooooooo");
    console.log(this.selectedTech);
    if (this.selectedTech === "Angular") {
      console.log(this.selectedTech + 'VALOR TECH');
      this.getDataAngular();
    }
  }

  getDataAngular() {
    this._postService.getPostAngular()
      .subscribe(data => {
        this.angularList = data;
        console.log(this.angularList);
        console.log("API ANGULAR");
      })
  }

}
