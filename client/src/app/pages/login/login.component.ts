import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = {
    username: null,
    password: null
  };
  errorMessage: string;

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

}
