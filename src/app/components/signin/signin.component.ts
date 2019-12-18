import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  signInGroup: FormGroup;
  ngOnInit() {
    this.signInGroup = new FormGroup({
      mail: new FormControl(),
      password: new FormControl()
    });
  }

  get email() { return this.signInGroup.get('mail').value; }
  get password() { return this.signInGroup.get('password').value; }

  trySignIn() {
    this.authService.login(this.email, this.password).subscribe();
  }
}
