import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Comment } from '../../../models/comment';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { CommentDto } from 'src/app/models/comment-dto';


@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {
  public comment: Comment = new Comment();
  public isCaptchaValid: false;
  

  email = new FormControl('', [Validators.required, Validators.email])
  @ViewChild('recaptcha', { static: true }) recaptchaElement: ElementRef;
  captchaResponse: string;

  ngOnInit() {
    this.addRecaptchaScript();  
  }

  constructor(private commentService: CommentService, private render: Renderer2) { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'To pole nie może być puste' :
      this.email.hasError('email') ? 'To nie jest prawidłowy email' :
        '';
  }

  submitComment() {
    if (this.email.valid) {
      this.comment.email = this.email.value;

      this.email.setValue("");
      this.comment.body = "";
      this.comment.nickname = "";
      window['grecaptcha'].reset();
    }

  }

  verifyReCaptch() {
    let responseObj: any = { captchaResponse: this.captchaResponse }
    this.commentService.getCaptchaValidataion(responseObj).subscribe(res => {
      this.isCaptchaValid = res;
      console.log(this.isCaptchaValid);
    });
  }

  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey': '6LcyCMEUAAAAAAMDPT0sHesqaldkxCOdqibYCGsf',
      'callback': (response) => {
        this.captchaResponse = response;
      }
    });
  }

  addRecaptchaScript() {

    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }

    (function (d, s, id, obj) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));

  }
}
