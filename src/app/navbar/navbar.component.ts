import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private loginService: LoginService, private cdr: ChangeDetectorRef,private router:Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.isAuth();
  }

  isAuth() {
    const auth=sessionStorage.getItem('user') !== null;
    console.log(auth);
    return auth;
  }

  // login(){
  //   this.router.navigate(['login']);
  // }

  logout() {
    this.isAuthenticated=false;
    this.loginService.logout();
    this.isAuthenticated = false;
    this.cdr.detectChanges();
  }
}
