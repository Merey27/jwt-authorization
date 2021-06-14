import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../interfaces/user.interface';
import {Job} from '../../interfaces/job.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  userSub: Subscription;
  jobList$: Observable<Job[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
