import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Member, Repository } from '../../models/Models';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: Member[];
  repos: [][];
  videoUrl = 'https://storage.googleapis.com/spacey/Infinity%20Y.mp4';
  showed = true;

  constructor(private userService: UserService, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.userService.getMembers().subscribe(res => {
      this.members = res;
    });

    this.repositoryService.get().subscribe(res => {
      this.repos = this.reduceToTabOfTabs(
        res.sort((a, b) => {
          return new Date(b.created_at).getTime() - new Date (a.created_at).getTime()
        })
      )
    });
  }

  private reduceToTabOfTabs(repos: Repository[]): [][] {
    let tabOfTabs = [];
    const iterations = Math.ceil(repos.length/4);
    for(let i = 0; i < iterations; i++) {
        let tabs = [];
        for(let j = 0; j < 4; j++) {
          let data = repos.shift();
          if (data) tabs.push(data);
        }
      tabOfTabs.push(tabs);
    }
    return tabOfTabs;
  }
}
