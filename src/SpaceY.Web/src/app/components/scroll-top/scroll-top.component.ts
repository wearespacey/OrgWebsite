/* Author : Apple Mahmood
 * Created : 29/10/2018
 * Last editor : HunteRoi
 * Last edited : 17/05/2019 11:10
 * Source : https://medium.com/@appl4e/scroll-to-top-button-for-angular-99ddeebb8c3a
 */

import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.css']
})

export class ScrollTopComponent implements OnInit {
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
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

  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
  }

  ngOnInit() {}
}