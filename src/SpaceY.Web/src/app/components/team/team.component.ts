import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Member } from '../../models/models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  members: Member[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getMembers().subscribe(res => {
      this.members = res;
    });
  }

}
