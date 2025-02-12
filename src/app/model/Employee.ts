export class Employee{
    
        employeeId: number;
        employeeName: string;
        contactNo: string;
        emailId: string;
        deptId: number;
        password: string;
        gender: string;
        role: string;
        createdDate: string;

        constructor(){
            this.employeeId= 0;
            this.employeeName="";
            this.contactNo="";
            this.emailId="";
            this.deptId=0;
            this.password="";
            this.role="";
            this.gender="";
            this.createdDate = new Date().toISOString();
        }
      
}
export interface IParentDept{
    
        departmentId:number;
        departmentName:string;
        departmentLogo:string;
    
}
export interface IChildDept{
    
    childDeptId:number;
    parentDeptId:number;
    departmentName:string;

}
export interface IApiResponse{
    message:string;
    result:boolean;
    data:any
}