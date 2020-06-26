import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  public selectedOption: any = [];
  public subject = new Subject<any>();

  constructor() { }

  private selectedOptionSource = new BehaviorSubject(this.selectedOption);

  currentOption = this.selectedOptionSource.asObservable();

  changeOption(option: string) {
    this.selectedOptionSource.next(option);
  }
}
