import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/data/services/user.service';
import { Owner, Repository } from '@data/models';
import { RepositoryService } from 'src/app/data/services/repository.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: Owner[];
  repos: Repository[];
  videoUrl: SafeUrl;
  showed = true;

  constructor(private userService: UserService, private repositoryService: RepositoryService, private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/z8eMjlWTzSY?controls=0&autoplay=1&enablejsapi=1');
  }

  ngOnInit() {
    this.userService.getMembers().subscribe(res => {
      this.members = res;
    });

    this.repositoryService.get().subscribe(res => {
      this.repos = res
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .filter(r => !r['is_template']);
    });
  }
}
