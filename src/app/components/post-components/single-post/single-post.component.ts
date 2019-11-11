import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private postSerive: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postSerive.getById(params.get("id")).subscribe(s => {
        if (s) {
          this.post = s;
        }
      })
    });
  }

  updatePost() {
    this.postSerive.updatePost(this.post.id, this.post);
  }

}
