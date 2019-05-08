import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-clip',
  templateUrl: './presentation-clip.component.html',
  styleUrls: ['./presentation-clip.component.css']
})
export class PresentationClipComponent implements OnInit {

  @Input() showed: boolean;
  @Input() videoUrl: string;

  constructor() { }

  ngOnInit() {
  }

  finished() {
    this.showed = false;
  }
}
