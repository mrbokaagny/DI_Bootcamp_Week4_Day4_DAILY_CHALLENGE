import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : User = {username : 'mr angular' , picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png'}

  pictureUser? : string = this.user.picture

  constructor() { }

  ngOnInit(): void {
  }

  getFullName(){
    return this.user.username
  }

}
