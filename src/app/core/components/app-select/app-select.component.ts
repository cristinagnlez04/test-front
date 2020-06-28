import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { SelectService } from 'src/app/shared/services/select.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.css']
})
export class AppSelectComponent implements OnInit {

  value: string;
  name: string;
  img: string;

  nameTechs: any = [
    { value: 'Angular', name: 'Angular', img: '/../assets/img/icon-angular.png' },];
  selectedTech: string = '';
  form: FormGroup;

  // "Angular", "React", "Vue"

  constructor(private _selectService: SelectService, private _localStorageService: LocalStorageService) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.initialState();
  }

  initialState() {
    this.form = new FormGroup({
      selTechs: new FormControl(this._localStorageService.getSelectedOption()),
    });
  }

  changeSelect(event: any) {
    this.selectedTech = event.target.value;
    this._selectService.changeOption(this.selectedTech);
    this._localStorageService.saveSelectedOption(this.selectedTech);
    console.log(this.selectedTech);
  }

}
