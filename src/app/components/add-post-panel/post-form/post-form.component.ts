import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Post } from 'src/app/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { CategoriesService } from 'src/app/services/categories.service';


// TODO data structure!
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public Editor = ClassicEditor;
  public selectedCategory: string = "penis";
  public categories: string[];
  public possibleCategories: string[] = [];
  public isUserSure:boolean = false;
  public postToAdd: Post = {
    data: {
      userId: -1,
      title: "",
      description: "",
      pictureUrl: "",
      creationDate: Date.now().toString(),
      categories: [],
    }
  };

  public postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      customCategory: ['', [Validators.maxLength]]
    });

    this.categoriesService.getAll().subscribe(categories => {
      if (categories) {
        this.categories = categories;
      }
      error => {
        console.error(error);
      }
      
    });
  }

  public onChange({ editor }) {
    this.postToAdd.data.description = editor.getData();;
  }

  public onSubmit() {
    this.postToAdd.data.creationDate = Date.now().toString();
    this.postToAdd.data.title = this.postForm.get('title').value;
    if(this.possibleCategories.length > 0 || this.isUserSure)
    console.log(this.postToAdd.data);
  }

  public removeCategory(categoryToRemove) {
    this.postToAdd.data.categories = this.postToAdd.data.categories.filter(s => s !== categoryToRemove);
  }

  checkSimilarity(data) {
    for(let i = 0; i < this.categories.length; i++){
      if (this.diceCoefficient(this.categories[i], data) >= 0.85) {
        this.possibleCategories.push(this.categories[i]);
      }
    }

    console.log(this.possibleCategories);
  }

  emptyPossibleCategoriesArray(){
    this.possibleCategories = [];
  }

  private diceCoefficient(arg1: string, arg2: string) {
    const [...first] = arg1;
    const [...second] = arg2;

    let intersection = first.filter(value =>
      second.includes(value));
    console.log(2 * intersection.length / (first.length + second.length));
    return (2 * intersection.length / (first.length + second.length));
  }


}
