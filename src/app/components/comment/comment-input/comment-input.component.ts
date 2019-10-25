import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {

  constructor() { }
  log(x){console.log(x);}

  validateMaxLength(x:NgModel):boolean{
    return x.value.length == 5;
  }

  ngOnInit() {
  }

}
