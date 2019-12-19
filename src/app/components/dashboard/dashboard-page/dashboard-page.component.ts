import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import { PostService } from 'src/app/services/post.service';
import {User} from '../../../models/User';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  posts:Post[] = [];
  userId:string;
  constructor(private postService:PostService) { }

  ngOnInit() {
    let u = (JSON.parse(localStorage.getItem('user'))) as User;
    this.postService.getPostsByUserId(u.id).subscribe(s => this.posts.push(s as any as Post));
  }

}
