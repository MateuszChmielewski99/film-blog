import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Post } from 'src/app/models/post';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { PostComponent } from '../../post-components/post/post.component';
import { of } from 'rxjs';

// TODO data structure!
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public Editor = ClassicEditor;
  public selectedCategory:string = "penis";
  public categories = of(["category1","category2"]);
  public postToAdd: Post = {
    data: {
      userId:-1,
      title:"",
      description:"",
      pictureUrl:"",
      creationDate:Date.now().toString(),
      categories: [],
    }
  };

  public postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      customCategory: ['',[Validators.maxLength]]
    });
  }

  public onChange({ editor }) {
    this.postToAdd.data.description = editor.getData();;
  }

  public onSubmit() {
    this.postToAdd.data.creationDate = Date.now().toString();
    this.postToAdd.data.title = this.postForm.get('title').value;
    console.log(this.postToAdd.data);
  }

  public tmp({value}){
    console.log(value);
  }

}
