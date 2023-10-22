import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ENDPOINTS } from '../rest-endpoint';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  errMess:string ='';
  token:any;

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router){}
  
  ngOnInit(): void {
    
    this.loginForm=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    if(this.loginForm.invalid){
      return;
    }
    const user=this.loginForm.value;
    this.http.post(ENDPOINTS.LOGIN,user,{responseType:'text'}).subscribe(
      {
        next:(response) =>{
          this.token=response;
          localStorage.setItem('token',this.token);
          this.router.navigate(['../home']).then(()=>{
            window.location.reload();
          })

        },
        error:(error)=>{
          this.errMess=error;
        }
      }
    )
  }
  


}
