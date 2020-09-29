import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-query',
  templateUrl: './post-query.component.html',
  styleUrls: ['./post-query.component.css']
})
export class PostQueryComponent implements OnInit{

  post: Post;

  constructor(
    private router: Router,
    private postServices: PostService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {

    let { post: p } = history.state
    console.log(p);
    
    if (p && p.id) return this.post = p

    this.activatedRoute.queryParams.subscribe(({ id }) => {

      this.postServices.getPost(id).subscribe(postData => {
        this.post = postData
      })

    })
  }

}
