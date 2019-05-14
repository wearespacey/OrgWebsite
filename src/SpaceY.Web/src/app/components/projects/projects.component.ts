import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Repository[];

  constructor() { }

  ngOnInit() { }

  public get sortedByCreationDateProjects(): Repository[] {
    return this.projects.sort(
      (a, b) => {
        // descending order
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    );
  }
}
