import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-presentation-clip',
  templateUrl: './presentation-clip.component.html',
  styleUrls: ['./presentation-clip.component.css']
})
export class PresentationClipComponent implements OnInit {

  @Input() showed: boolean;
  @Input() videoUrl: string;
  @ViewChild('videoyt')
  public video;
  constructor() { }
  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
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
