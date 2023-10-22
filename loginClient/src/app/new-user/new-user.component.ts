import { UserDto } from './../dto/UserDto';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENDPOINTS } from '../rest-endpoint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  userForm!:FormGroup;
  userExist: boolean = false;

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      dob: ['', Validators.required],
      adminAcc:[false]
    });
  }

  onSubmit(user:any){
    this.http.get(ENDPOINTS.CHECK+user.userName).subscribe(
      (data) => {
        if(!data){
          console.log(user);
          this.http.post(ENDPOINTS.CREATE,user).subscribe(
            (data) => {
              const currentUrl = this.router.url;
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate([currentUrl]);
              });
            }  
          )
        }
        else{
          this.userExist=true;
        }
      }
    )
        
  }


  
}
