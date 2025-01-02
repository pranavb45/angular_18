export class EmployeeModel{
    empId:number;
    name:string;
    emailId:string;
    city:string;
    state:string;
    contactNo:string;
    address:string;
    pinCode:string;


    constructor() {
        this.emailId='';
        this.address='';
        this.city='';
        this.contactNo='';
        this.state='';
        this.name='';
        this.empId=0;
        this.pinCode='';
    }
}