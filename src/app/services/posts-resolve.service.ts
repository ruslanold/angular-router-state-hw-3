import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[]{
    return this.postService.getAllPosts()
  }
  
}
