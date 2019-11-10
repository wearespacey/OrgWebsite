import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-presentation-clip',
  templateUrl: './presentation-clip.component.html',
  styleUrls: ['./presentation-clip.component.css']
})
export class PresentationClipComponent implements OnInit, AfterViewInit {
  @Input() showed: boolean;
  @Input() videoUrl: string;
  @ViewChild('videoyt')
  public video;

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit(): Promise<void> {
    await this.delay(19000);
    this.finished();
  }

  finished() {
    this.showed = false;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
