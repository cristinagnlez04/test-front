import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppSelectComponent } from './components/app-select/app-select.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppPaginationComponent } from './components/app-pagination/app-pagination.component';
import { AppPostsComponent } from './components/app-posts/app-posts.component';
import { AppPostsFavoritesComponent } from './components/app-posts-favorites/app-posts-favorites.component';

@NgModule({

  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppSelectComponent,
    AppHomeComponent,
    AppPaginationComponent,
    AppPostsComponent,
    AppPostsFavoritesComponent
  ],
  exports: [
    AppHomeComponent
  ]
})
export class CoreModule { }
