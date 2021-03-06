import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(s => {
      this.posts = s;
    });
  }

  getData(event: PageEvent) {
    this.postService.getAllInPage(event.pageIndex * event.pageSize, event.pageSize)
      .subscribe(s => this.posts = s);
  }

}
