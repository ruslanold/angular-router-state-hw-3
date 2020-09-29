import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  post: Post;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({postData}) => {
      console.log(postData);
      this.post = postData
    })
   }

   



}
