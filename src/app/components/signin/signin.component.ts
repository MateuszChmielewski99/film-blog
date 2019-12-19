import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private builder: FormBuilder, private router:Router) { }
  signInGroup: FormGroup;
  ngOnInit() {
    this.signInGroup = this.builder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get email() { return this.signInGroup.get('mail'); }
  get password() { return this.signInGroup.get('password'); }

  trySignIn() {
    if (this.validateData()) {
      let correct = this.authService.signIn({ email: this.email.value, password: this.password.value });
      if(correct){
        this.router.navigate(['/']);
      }
    }
  }

  private validateData(): boolean {
    return this.email.touched && this.email.valid && this.password.touched && this.password.valid;
  }
}
