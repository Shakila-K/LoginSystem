export class UserDto{
    userName:string;

     password:string;
      email:string;
       name:string ;

       age:number ;
       dob:string ;
      

       constructor(userName: string, password: string, email: string, name: string, age: number, dob: string) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.name = name;
        this.age = age;
        this.dob = dob;
       
    }
    
}