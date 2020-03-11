import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-presentation-clip',
  templateUrl: './presentation-clip.component.html',
  styleUrls: ['./presentation-clip.component.css']
})
export class PresentationClipComponent implements OnInit, AfterViewInit {
  @Input() showed: boolean;
  @Input() videoUrl: SafeUrl;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    await this.delay(19000);
    this.finished();
  }

  finished() {
    this.showed = false;
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
