import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {

  showAll: boolean = true;
  constructor() {

  }

  showAllPosts() {
    this.showAll = true;
  }

  showFaves() {
    this.showAll = false;
  }


}
