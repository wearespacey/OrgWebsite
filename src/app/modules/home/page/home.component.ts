import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/data/services/user.service';
import { Member, Repository } from '../../../data/models/Models';
import { RepositoryService } from 'src/app/data/services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: Member[];
  repos: Repository[];
  videoUrl = 'https://www.youtube.com/embed/z8eMjlWTzSY?controls=0&autoplay=1&enablejsapi=1';
  showed = true;

  constructor(private userService: UserService, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.userService.getMembers().subscribe(res => {
      this.members = res;
    });

    this.repositoryService.get().subscribe(res => {
      this.repos = res.sort((a, b) => new Date(b.created_at).getTime() - new Date (a.created_at).getTime());
    });
  }
}
