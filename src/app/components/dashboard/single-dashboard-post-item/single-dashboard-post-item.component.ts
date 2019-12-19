import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-single-dashboard-post-item',
  templateUrl: './single-dashboard-post-item.component.html',
  styleUrls: ['./single-dashboard-post-item.component.css']
})
export class SingleDashboardPostItemComponent implements OnInit {

  @Input() post:Post;
  constructor() { }

  ngOnInit() {
    console.log(this.post);
  }

}
