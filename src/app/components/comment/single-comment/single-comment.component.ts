import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../../../models/comment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  @Input() comment:Comment;
  
  constructor() {}

  ngOnInit() {
  }

}
