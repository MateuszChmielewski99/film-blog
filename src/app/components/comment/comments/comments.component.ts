import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }
  comments: Comment[];
  postId: string;

  ngOnInit() {
    this.postId = this.route.snapshot.url[1].path;

    this.commentService.getComments(this.postId).subscribe(comment => {
      if(comment){
      this.comments = comment.map(x => Object.assign(new Comment(), x));
      }
    });
  }
}