import { Injectable } from '@angular/core';
import { UserDto } from '../dto/UserDto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userData!: UserDto; 
  constructor() { }
}
