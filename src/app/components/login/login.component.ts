import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = 'Credenciales inválidas';
  invalidLogin: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === 'qwe' && this.password === '123') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

}
