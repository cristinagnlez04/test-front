import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPostAngular(): Observable<any> {
    return this.http.get("https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0");
  }

  getPostReact(): Observable<any> {
    return this.http.get("​https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0");
  }

  getPostVue(): Observable<any> {
    return this.http.get("​https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0");
  }
}
