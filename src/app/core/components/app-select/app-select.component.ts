import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { SelectService } from 'src/app/shared/services/select.service';


@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.css']
})
export class AppSelectComponent implements OnInit {

  nameTechs: any = ["Angular", "React", "Vue"];
  selectedTech: string = '';

  constructor(private _selectService: SelectService) { }

  ngOnInit(): void {
  }

  changeSelect(event: any) {
    this.selectedTech = event.target.value;
    this._selectService.changeOption(this.selectedTech);
    console.log(this.selectedTech);
  }


}
