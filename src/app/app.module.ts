import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { PostsService } from './shared/services/posts.service';
import { AppHeaderComponent } from './shared/components/app-header/app-header.component';
import { APP_ROUTING } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SelectService } from 'src/app/shared/services/select.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    APP_ROUTING,


  ],
  providers: [
    PostsService,
    SelectService,
    LocalStorageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
