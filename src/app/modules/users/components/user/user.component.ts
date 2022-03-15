import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: IUser | undefined;
  public userId: number | undefined;
  public isLoading: boolean = false;
  constructor(
    private usersService: UsersService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
     this.userId = this.router.snapshot.params['id'] as number;
     this.getUserById(this.userId);
  }

  getUserById(userId: number) {
     this.isLoading = true;
    this.usersService.getUserById(userId).subscribe((user) => {
        this.user = user;
        this.isLoading = false;
    }, error => {
        this.isLoading = false;
      console.log('the error ', error)
    });
  }
}