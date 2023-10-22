export class UserDto{
    
    userName:string;
    password:string;
    email:string;
    name:string ;
    age:number ;
    dob:string ; 
    adminAcc:boolean;

    constructor(userName: string, password: string, email: string, name: string, age: number, dob: string, adminAcc: boolean) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.name = name;
        this.age = age;
        this.dob = dob;      
        this.adminAcc = adminAcc;
    }

}