import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPostsFavoritesComponent } from './app-posts-favorites.component';

describe('AppPostsFavoritesComponent', () => {
  let component: AppPostsFavoritesComponent;
  let fixture: ComponentFixture<AppPostsFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPostsFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPostsFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
