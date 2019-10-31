import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService:CommentService) { }
  comments:Comment[];

  ngOnInit() {
     this.commentService.getComments().subscribe(comment => {
       this.comments = comment.map(x => Object.assign(new Comment(),x));
     });
  }

  commentSubmitedEventFired(comment:Comment):void{
    console.log(comment);
    this.comments.push(comment);
  }
}
