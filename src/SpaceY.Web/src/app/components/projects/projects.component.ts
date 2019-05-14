import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projectsGroups: [][];

  constructor() { }

  ngOnInit() { }
}
