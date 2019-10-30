import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {Comment} from '../../../models/comment';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {
  public comment:Comment = new Comment();
  public isNotBodyEmpty:boolean = false;
  public isNameNotEmpty:boolean = false;
  
  constructor() {  }
  
  setBodyExists():void{
    this.isNotBodyEmpty = true; 
  }

   setIsNameNotEmpty():void{
    this.isNameNotEmpty = true;
  }

  ngOnInit() { }

}
