import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Post } from 'src/app/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public Editor = ClassicEditor;
  public selectedCategory: string;
  public categories: string[];
  public possibleCategories: string[] = [];
  public isUserSure: boolean = false;
  public postToAdd: Post;
  @Input() post: Post;
  @Output() dialogClosed: EventEmitter<any> = new EventEmitter();

  public postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    let initialTitle = this.post.data.title?this.post.data.title:'';
    this.postForm = this.formBuilder.group({
      title: [initialTitle, [Validators.required]],
      customCategory: ['', [Validators.maxLength]]
    });

  
    if (!!this.post) {
      this.postToAdd = this.post;
    } else {
      this.postToAdd = {
        data: {
          userId: -1,
          title: "",
          description: "",
          pictureUrl: "",
          creationDate: Date.now().toString(),
          categories: [],
        }
      };

    }

    this.categoriesService.getAll().subscribe(categories => {
      if (categories) {
        this.categories = categories;
      }
      error => {
        console.error(error);
      }

    });
  }

  get title(){return this.postForm.get('title').value;}

  public onChange({ editor }) {
    this.postToAdd.data.description = editor.getData();
  }

  public onSubmit() {
    if (!!this.post) {
      this.dialogClosed.emit(this.postToAdd);
    }

    this.postToAdd.data.creationDate = Date.now().toString();
    this.postToAdd.data.title = this.postForm.get('title').value;
    if (this.possibleCategories.length > 0 || this.isUserSure) {
      if (this.postToAdd.data.categories.length > 0 && this.postToAdd.data.description && this.postToAdd.data.title) {
        this.postService.addPost(this.postToAdd).subscribe(s => console.log(s));
      }
    }
  }

  onUserEnsured() {
    this.isUserSure = true;
    this.onSubmit();
  }

  public removeCategory(categoryToRemove) {
    this.postToAdd.data.categories = this.postToAdd.data.categories.filter(s => s !== categoryToRemove);
  }

  public checkSimilarity(data) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.diceCoefficient(this.categories[i], data) >= 0.85) {
        this.possibleCategories.push(this.categories[i]);
      }
    }
  }

  public emptyPossibleCategoriesArray() {
    this.possibleCategories = [];
  }

  private diceCoefficient(arg1: string, arg2: string) {
    const [...first] = arg1;
    const [...second] = arg2;

    let intersection = first.filter(value => second.includes(value));

    return (2 * intersection.length / (first.length + second.length));
  }
}
