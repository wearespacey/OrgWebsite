import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showed = true;
  video;
  @ViewChild('video')
  videoPlayer;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getVideo();
  }
  
  finished() {
    this.showed = false;
  }

  getVideo() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*',
    })
    this.http.get('https://storage.googleapis.com/spacey/Infinity%20Y.mp4', {headers}).subscribe(
      (result: Blob) => {
        console.log(result);
      }
    );
  }

}
