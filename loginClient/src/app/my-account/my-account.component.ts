import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ENDPOINTS } from '../rest-endpoint';
import { JwtService } from '../services/jwtservice.service';
import { UserDto } from '../dto/UserDto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{
  userForm!:FormGroup
  user!:UserDto;
  userName!:string;
  constructor(private http:HttpClient,private jwtdeco:JwtService,private fb:FormBuilder,private router:Router){
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      dob: ['', Validators.required],
      // Admin:[false]
    });
  }
  ngOnInit(): void {
    this.userName=this.jwtdeco.getUserName();
    this.http.get<UserDto>(ENDPOINTS.GETINFO+this.userName).subscribe(
     ( data )=> {
        this.user=data;
        this.userForm.get('userName')?.setValue(this.user.userName);
        this.userForm.get('password')?.setValue(this.user.password);
        this.userForm.get('email')?.setValue(this.user.email);
        this.userForm.get('name')?.setValue(this.user.name);
        this.userForm.get('age')?.setValue(this.user.age);
        this.userForm.get('dob')?.setValue(this.user.dob);   
        // this.userForm.get('Admin')?.setValue(this.user.Admin);
      }
    )

    console.log(ENDPOINTS.GETINFO+this.userName);
  }

  onSubmit(user:UserDto){
    this.http.put<UserDto>(ENDPOINTS.UPDATE,user).subscribe((response)=>
    {
      this.user=response;
      const currentUrl = this.router.url;
                              this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                              this.router.navigate([currentUrl]);
                              });
      console.log(response);
    })
    console.log(ENDPOINTS.UPDATE+ "   gf " + user.email)

  }
  
}
