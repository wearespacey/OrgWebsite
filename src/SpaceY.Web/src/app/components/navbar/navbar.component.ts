import { Component, OnInit, HostListener, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('header') header;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.header.nativeElement.style.visibility = 'hidden';
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (window.pageYOffset === 0) {
      this.header.nativeElement.style.visibility = 'hidden';
    } else {
      this.header.nativeElement.style.visibility = 'visible';
    }
  }
}
