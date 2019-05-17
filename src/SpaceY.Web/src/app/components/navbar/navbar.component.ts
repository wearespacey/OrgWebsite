import { Component, OnInit, HostListener, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { SlideInOutAnimation } from './slideInOut-animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [SlideInOutAnimation]
})

export class NavbarComponent implements OnInit {
  @ViewChild('header') header: ElementRef;
  private fragment: string;
  private navigationEnd: string;
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(f => this.fragment = f);
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(event => {
      this.navigationEnd = event.url;
      this.header.nativeElement.style.visibility = this.isDirectlyVisible() ? 'visible' : 'hidden';
    });
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {
      console.error(e);
    }
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    if (!this.isDirectlyVisible()) {
      if (event.srcElement.scrollingElement.scrollTop > 100
        || window.pageYOffset
        || this.document.documentElement.scrollTop
        || this.document.body.scrollTop > 100) {

        this.windowScrolled = true;

      } else if (event.srcElement.scrollingElement.scrollTop < 10
        || this.windowScrolled && window.pageYOffset
        || this.document.documentElement.scrollTop
        || this.document.body.scrollTop < 10) {

        this.windowScrolled = false;

      }
    }
  }

  private isDirectlyVisible(): boolean {
    return this.navigationEnd === '/events';
  }
}
