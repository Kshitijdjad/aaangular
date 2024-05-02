import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentInfo, PolicyInfo, userDetails } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private api="$https://localhost:7087/api";
  constructor(private http:HttpClient) { }

  getPayment(Empid:number):Observable<PaymentInfo[]>{
    return this.http.get<any>(`https://localhost:7087/api/Payment/${Empid}`);
  }


  getUserDetails(employeeId: string): Observable<userDetails> {
    const url = `https://localhost:7087/api/Employee/${employeeId}`;
    console.log(url);
    return this.http.get<userDetails>(url);
  }
  

  getUserPolicies(empId:string):Observable<PolicyInfo>{
    return this.http.get<PolicyInfo>(`https://localhost:7087/api/Policy/${empId}`);
  }

  saveCard(form:any){
    return this.http.post<any>('https://localhost:7087/api/Payment',form);
  }

  deletePayment(paymentId: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/Payment/${paymentId}`);
  }

}

