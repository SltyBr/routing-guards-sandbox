import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user$!: Observable<Data>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.route.data.pipe(map(({ user }) => user));
  }
}
