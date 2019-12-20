import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-single-dashboard-post-item',
  templateUrl: './single-dashboard-post-item.component.html',
  styleUrls: ['./single-dashboard-post-item.component.css']
})
export class SingleDashboardPostItemComponent implements OnInit {

  @Input() post: Post;
  @Output() postDelete: EventEmitter<any> = new EventEmitter();
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.post);
  }

  deletePost() {
    let result: boolean = false;
    this.postService.delete(this.post.id).subscribe(s =>
      result = s);
    if (result) {
      this.postDelete.emit(this.post.id);
    }
  }

  openDialog() {
    localStorage.setItem('title',this.post.data.title);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '70vh',
      data: this.post
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!!result){
        console.log(result);
       this.postService.update(result);
      }
    });
  }


}
