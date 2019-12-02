import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {

  @Input() category:string;
 @Output() removeItem:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }

  @HostListener('click') onClick(){
    this.removeItem.emit(this.category);
  }

}
