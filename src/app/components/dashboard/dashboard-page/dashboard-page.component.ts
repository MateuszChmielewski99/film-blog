import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { PostService } from 'src/app/services/post.service';
import { User } from '../../../models/User';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  posts: Post[] = [];
  postsCopy: Post[] = [];
  userId: string;
  searchedValue: string = "";
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    let u = (JSON.parse(localStorage.getItem('user'))) as User;
    this.postService.getPostsByUserId(u.id).subscribe(s => {
      this.posts.push(s as any as Post)
      this.postsCopy = [...this.posts];
    });
  }

  onPostDeleted(event) {
    this.posts = this.posts.filter(s => s.id !== event);
  }
}
