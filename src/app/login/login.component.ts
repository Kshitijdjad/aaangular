import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.loginForm.email, this.loginForm.password).subscribe(
      () => {
        this.router.navigate(['home']);

      },
      (error) => {
        alert(error);
      }
    );
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
    this.router.navigate(['login']);

  }
}
