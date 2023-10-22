import { Component, OnInit } from '@angular/core';
import { UserDto } from '../dto/UserDto';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../rest-endpoint';
import { DataService } from '../services/data.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwtservice.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit{

  userForm!:FormGroup;
  existingUsers: UserDto [] = [];
  userData!: UserDto;
  userExist: boolean = false;

  constructor (
    private http:HttpClient, 
    private modalService: NgbModal, 
    private fb:FormBuilder,
    private jwtDeco:JwtService
    ){
      this.userForm = this.fb.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        name: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(1)]],
        dob: ['', Validators.required],
        Admin:[false] //When updating user accounts we cant change account type so this value has no effect
      });
    }


  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.http.get<UserDto[]>(ENDPOINTS.GETALL).subscribe(
      (data) => {
        this.existingUsers = data;
        console.log(this.existingUsers);
      }
    )
  }

  editUser(userData: UserDto){
    this.userData=userData;
     
    this.userForm.get('userName')?.setValue(userData.userName);
    this.userForm.get('password')?.setValue(userData.password);
    this.userForm.get('email')?.setValue(userData.email);
    this.userForm.get('name')?.setValue(userData.name);
    this.userForm.get('age')?.setValue(userData.age);
    this.userForm.get('dob')?.setValue(userData.dob);   

  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}

  onSubmit(user:UserDto){
    this.http.get(ENDPOINTS.CHECK+user.userName).subscribe(
      (data) => {
        if (!data || (this.userData.userName==user.userName)){
          this.http.put<UserDto>(ENDPOINTS.UPDATE,user).subscribe(
            (response)=> {
              this.userData=response;
              this.refresh();
              this.modalService.dismissAll();
          })
        }
        else{
          this.userExist=true;
        }
      }
    )   
  }

  deleteUser(){

    if (this.jwtDeco.getUserName()==this.userData.userName){
      this.modalService.dismissAll();
    }
    else{
      this.http.delete(ENDPOINTS.DELETE+this.userData.userName).subscribe(
        (data) => {
          this.refresh();
          this.modalService.dismissAll();
        }
      )
    }
    
  }

}
