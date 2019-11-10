import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  @Input() members;

  constructor() {
  }

  ngOnInit() {
  }
}
