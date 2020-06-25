import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  constructor(private http: HttpClient) {
    console.log("Prueba de service");
  }

  getPosts() {
    this.http.get('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0').subscribe(data => {
      console.log(data)
    })
  }
}
