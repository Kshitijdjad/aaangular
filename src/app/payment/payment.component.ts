// payment.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { PaymentInfo } from '../types';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  PaymentMethods: PaymentInfo[] = []; // Initialize as an empty array
  form1:any={
    cardHolder: "",
    cardNumber: "",
    empId: 0,
    expDate: "",
    paymentId: 0
  }
  constructor(
    private httpService: HttpService,
    private http:HttpClient
  ){}

  ngOnInit(): void {
    let empId=Number(sessionStorage.getItem('userId'));
    this.getPaymentMethods(empId);
  }

  onSubmit() {
    // Implement onSubmit logic if needed
    // htt
    this.form1.empId=Number(sessionStorage.getItem('userId'));
    this.httpService.saveCard(this.form1).subscribe((response)=>{
      console.log("card added successfully");
      this.getPaymentMethods(1);
    })
    console.log(this.form1);
    }
  
  getPaymentMethods(Empid: number): void {
    this.httpService.getPayment(Empid).subscribe(
      (data: any) => { // Update the parameter type to PaymentInfo[]
        this.PaymentMethods = data; // Assign the array to PaymentMethods
        console.log('User data data data', this.PaymentMethods);

        this.PaymentMethods.forEach(item => {
          console.log(item); // Output each item to the console
        });
      },
      error => {
        console.error('Error fetching payment details:', error);
      }
    );
  }

  deletePayment(index: number, paymentId: number): void {
    let empId=Number(sessionStorage.getItem('userId'));
    this.http.delete(`https://localhost:7087/api/Payment/${paymentId}`).subscribe(() => {
      console.log("Payment deleted successfully");
      this.getPaymentMethods(empId);
    }, error => {
      console.error('Error deleting payment:', error);
    });
  }
  
}
