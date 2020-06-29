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
      message = 'error';
    }
    return message;
  }

  loadPostFavorite() {
    let i;
    let validateKey;
    let obj;
    let arr = [];

    for (i = 0; i < localStorage.length; i++) {
      validateKey = this.validateJson(localStorage.getItem(localStorage.key(i)));

      if (validateKey) {
        obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(obj);
      }

    }
    return arr;
  }

  validateJson(str) {
    try {
      JSON.parse(str);
    } catch (error) {
      return false;
    }
    return true;
  }

  saveSelectedOption(option) {
    let message;
    try {
      localStorage.setItem('idSelectOption', option);
      message = 'success';

    } catch (error) {
      message = 'error';
    }
    return message;
  }

  getSelectedOption() {
    let message;

    try {
      message = localStorage.getItem('idSelectOption');
    } catch (error) {
      message = '';
    }
    return message;
  }

  getPostSaved(objectID) {
    let message;

    try {
      message = localStorage.getItem(objectID);

    } catch (error) {
      message = '';
    }
    return message;
  }

}
