import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerGroup: FormGroup;
  hide:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerGroup = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password:['', [Validators.required, Validators.min(5)]]
    });
  }

  get email(){return  this.registerGroup.get('email');}
  get password(){return this.registerGroup.get('password');}

  submitForm():void{
    console.log(this.registerGroup);
  }
}

