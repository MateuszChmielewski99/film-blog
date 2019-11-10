import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Comment } from '../../../models/comment';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';



@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {
  public comment: Comment = new Comment();
  public isCaptchaValid: false;
  email = new FormControl('', [Validators.required, Validators.email])
  captchaResponse: string;

  ngOnInit() {

  }

  constructor(private commentService: CommentService) { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'To pole nie może być puste' :
      this.email.hasError('email') ? 'To nie jest prawidłowy email' :
        '';
  }

  submitComment() {
    if (this.email.valid) {
      this.comment.email = this.email.value;
      this.commentService.addComent(this.comment);
      this.email.setValue("");
      this.comment.body = "";
      this.comment.nickname = "";
      this.isCaptchaValid = false;
    }

  }

  verifyReCaptch(captchaResponse: string) {
    let responseObj: any = { captchaResponse: captchaResponse }
    this.commentService.getCaptchaValidataion(responseObj).subscribe(res => {
      this.isCaptchaValid = res;
    });
  }


}
