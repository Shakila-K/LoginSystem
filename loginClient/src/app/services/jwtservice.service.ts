import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class JwtService {
  userName!: string;
  isAd:boolean=false;
  private jwtHelper: JwtHelperService = new JwtHelperService();


  
  public getUserName () : string {
    const token = localStorage.getItem('token');

    if(token){
      this.userName = this.jwtHelper.decodeToken(token).userName;
      return this.userName;
    }

    return  "";

  }
  public isAdmin () : boolean {
    const token = localStorage.getItem('token');

    if(token){
      this.isAd = this.jwtHelper.decodeToken(token).role;
      return this.isAd;
    }

    return  this.isAd;

  }

}