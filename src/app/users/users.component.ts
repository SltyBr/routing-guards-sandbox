import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUsersService, User } from 'src/app/users/get-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;
  constructor(private userService: GetUsersService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
