import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUrl = 'https://storage.googleapis.com/spacey/Infinity%20Y.mp4';
  showed = true;

  constructor() { }

  ngOnInit() {
  }
}
