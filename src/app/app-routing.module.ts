import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostQueryComponent } from './components/post-query/post-query.component';
import { PostComponent } from './components/post/post.component';
import { PostResolveService } from './services/post-resolve.service';
import { PostsResolveService } from './services/posts-resolve.service';

const routes: Routes = [
  {
    path: 'posts', resolve: {allPosts: PostsResolveService}, component: AllPostsComponent
  },
  {
    path: 'post', component: PostQueryComponent
  },
  {
    path: 'post/:id', resolve: {postData: PostResolveService}, component: PostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
