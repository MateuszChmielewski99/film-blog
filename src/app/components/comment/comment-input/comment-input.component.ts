import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
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
  //public key:string = '6LcyCMEUAAAAAAMDPT0sHesqaldkxCOdqibYCGsf';
  public key:string = '6LevKcIUAAAAAMLgzhaS5hIl-47qexd1jTSinLX5';
  @Input() postId: string;
  end: any;

  ngOnInit() {}

  constructor(private commentService: CommentService) { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'To pole nie może być puste' :
      this.email.hasError('email') ? 'To nie jest prawidłowy email' :
        '';
  }

  submitComment() {
    if (this.email.valid) {
      this.comment.email = this.email.value;
      this.comment.postId = this.postId;
      this.commentService.addComent(this.comment).subscribe();
      this.email.setValue("");
      this.comment.body = "";
      this.comment.nickname = "";
      this.isCaptchaValid = false;
    }

  }

  verifyReCaptch(captchaResponse: string) {
    console.log(captchaResponse);
    this.commentService.getCaptchaValidataion(captchaResponse).subscribe(res => {
      this.isCaptchaValid = res;
      console.log(this.isCaptchaValid);
    });
  }


}
