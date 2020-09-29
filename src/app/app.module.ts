import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostQueryComponent } from './components/post-query/post-query.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AllCommentsComponent,
    AllPostsComponent,
    PostQueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
