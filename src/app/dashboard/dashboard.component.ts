import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { PolicyInfo, userDetails } from '../types';
import { get } from 'http';
import { UserInfo } from 'os';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails!: userDetails;
  userPolicies!:PolicyInfo;

  constructor(private httpService: HttpService,private router:Router) {}

  ngOnInit(): void {
    //this.userDetails=sessionStorage.getItem('user');
    console.log("Api call oninit")
    const user=sessionStorage.getItem('userId');
    if(user!==null){
      this.getUserDetails(user);
      this.getUserPolicies(user);
      console.log("Dibba"+ this.userPolicies.insurer);
  
    }
    else{
      this.router.navigate(['login']);
    }
   
  }
   

  getUserDetails(employeeId: string): void {
    this.httpService.getUserDetails(employeeId).subscribe(
      (data: userDetails) => {
        this.userDetails=( data);
        console.log('User details', this.userDetails);
      },
      error => {
        console.error('Error fetching user details:', error);
      }
    );
  }


    getUserPolicies(empId: string): void {
      this.httpService.getUserPolicies(empId).subscribe(
        (data: PolicyInfo) => {
          this.userPolicies = data;
          console.log('User policies', this.userPolicies);
        },
        error => {
          console.error('Error fetching user policies:', error);
        }
      );

      

  }
}
