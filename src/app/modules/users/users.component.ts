import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IAddress } from '../../shared/models/address';
import { IUser } from '../../shared/models/user';
import { UsersService } from '../../shared/services/users/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'];
  public listOfUsers: Array<IUser> = [];

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.listOfUsers = users;
    }, error => {
      console.log('the error ', error)
    });
  }

  navigateToUserById(user: IUser) {
    this.router.navigate(['users', user.id]);
  }

  concatAddress(address: IAddress): String {
    return `${address.street},${address.suite},${address.city},${address.zipcode}`;
  }
}
