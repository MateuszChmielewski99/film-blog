import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import {firestore} from 'firebase';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})



export class PostItemComponent implements OnInit {

  @Input() post:Post;
  public date:Date;

  constructor() {}

  ngOnInit() {
    // this.date =new Date(this.post.data.creationDate.nanoseconds * 1000);
    
  }



}
