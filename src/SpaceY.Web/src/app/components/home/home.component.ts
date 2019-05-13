import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Member, Repository } from 'src/app/models/Models';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: Member[];
  repos: Repository[];
  videoUrl = 'https://storage.googleapis.com/spacey/Infinity%20Y.mp4';
  showed = true;

  constructor(private userService: UserService, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.userService.getMembers().subscribe(res => {
      this.members = res;
    });
    this.repositoryService.get().subscribe(res => {
      this.repos = res;
    });
  }
}
