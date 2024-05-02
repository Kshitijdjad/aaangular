export interface PaymentInfo {
    cardHolder: string;
    cardNumber: string;
    empId: number;
    expDate: string;
    paymentId: number;
}
  
export interface PolicyInfo {
    policyId: number;
    insurer: string;
    type: string;
    start_date:string,
    end_date: string,
    empId: number;
}


export interface  userDetails{
    empId: number;
    name: string;
    phone: number;
    company: string;
    email: string;
    password:string;
}