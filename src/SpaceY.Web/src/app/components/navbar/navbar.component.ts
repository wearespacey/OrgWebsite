import { Component, OnInit, HostListener, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('header') header;
  private navigationEnd: string;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(event => {
      this.navigationEnd = event.url;
      if (this.isDirectlyVisible()) {
        this.header.nativeElement.style.visibility = 'visible';
      } else {
        this.header.nativeElement.style.visibility = 'hidden';
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    if (!this.isDirectlyVisible()) {
      if (window.pageYOffset === 0) {
        this.header.nativeElement.style.visibility = 'hidden';
      } else {
        this.header.nativeElement.style.visibility = 'visible';
      }
    }
  }

  private isDirectlyVisible(): boolean {
    return this.navigationEnd === '/events';
  }
}
