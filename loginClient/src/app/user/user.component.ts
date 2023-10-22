import { Component } from '@angular/core';
import { JwtService } from '../services/jwtservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
logout() {
  localStorage.removeItem('token');
  this.router.navigate(["/login"]).then(()=>{
    window.location.reload();
  })
}
  userName:string | null = null;
  isAdmin: boolean = false;
  activeComponent: string = "myacc";

  constructor (private jwtDeco:JwtService, private router:Router){}

    ngOnInit(){
      this.userName=this.jwtDeco.getUserName();
      this.isAdmin=this.jwtDeco.isAdmin();
      console.log(this.userName+"jsdj"+this.isAdmin)

    }

    changeComponent(componentName :string){
      this.activeComponent=componentName;
    }
}
