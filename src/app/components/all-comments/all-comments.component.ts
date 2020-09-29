import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  @Input() postId: string;
  
  comments: Comment[];
  
  constructor(private commentService: CommentService) {}
  
  ngOnInit(): void {
    this.commentService.getAllComments(this.postId).subscribe(res => this.comments = res)
  }

}
