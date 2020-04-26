import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-presentation-clip',
  templateUrl: './presentation-clip.component.html',
  styleUrls: ['./presentation-clip.component.css']
})
export class PresentationClipComponent implements OnInit {
  @Input() showed: boolean;
  @Input() videoUrl: SafeUrl;

  constructor() { }

  ngOnInit() {
  }

}
