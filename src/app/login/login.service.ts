import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { userDetails } from '../types';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { 
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<userDetails>(`https://localhost:7087/api/Employee/api/users/${email}`).pipe(
      map((data: userDetails) => {
        if (data.password === password) {
          sessionStorage.setItem('user', JSON.stringify(data));
          sessionStorage.setItem('userId', String(data.empId));
          return true;
        } else {
          throw new Error('Invalid credentials');
        }
      }),
      catchError((error) => {
        console.error(error);
        return throwError('Something went wrong');
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userId');
    this.router.navigate(['login']);
  }
}
