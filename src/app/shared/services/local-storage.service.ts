import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  savePostAsFavorite(key, value) {
    let message;
    try {
      localStorage.setItem(key, value);
      message = 'success';

    } catch (error) {
      console.log('error', error);
      message = 'error';
    }
    return message;
  }

  removePostAsFavorite(key) {
    let message;
    try {
      localStorage.removeItem(key);
      message = 'success';

    } catch (error) {
      console.log('error', error);
      message = 'error';
    }
    return message;
  }

  loadPostFavorite() {
    let i;
    let validateKey;
    let obj;

    console.log("local storage");
    for (i = 0; i < localStorage.length; i++) {
      // console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
      validateKey = this.validateJson(localStorage.getItem(localStorage.key(i)));

      if (validateKey) {
        obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log("obj", obj)
      }
    }

  }

  validateJson(str) {
    try {
      JSON.parse(str);
    } catch (error) {
      return false;
    }
    return true;
  }

}
