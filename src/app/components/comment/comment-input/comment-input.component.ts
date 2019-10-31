import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../models/comment';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {
  public comment: Comment = new Comment();
  public isNotBodyEmpty: boolean = false;
  public isNameNotEmpty: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email])
  @Output() commentSubmited:EventEmitter<any> = new EventEmitter()

  constructor() { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'To pole nie może być puste' :
      this.email.hasError('email') ? 'To nie jest prawidłowy email' :
        '';
  }

  submitComment(){
    this.comment.email = this.email.value;
    this.commentSubmited.emit(this.comment);
  }

  ngOnInit() { }

}
