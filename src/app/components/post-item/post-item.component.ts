import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post:Post;

  constructor() {
    this.post = {
      id:1,
      userId:1,
      description:"Opis",
      title:"Tytuł",
      //pictureUrl:"https://via.placeholder.com/600/92c952",
      date: new Date().toDateString()
    }
  }

  ngOnInit() {
  }

}
