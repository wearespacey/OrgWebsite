import { Component, OnInit, Inject, ViewChild, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scrolling-footer',
  templateUrl: './scrolling-footer.component.html',
  styleUrls: ['./scrolling-footer.component.css']
})
export class ScrollingFooterComponent implements OnInit {
  @ViewChild('backtotop') backToTop;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.backToTop.nativeElement.style.display = 'none';
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (window.pageYOffset === 0) {
      this.backToTop.nativeElement.style.display = 'none';
    } else {
      this.backToTop.nativeElement.style.display = 'inline-block';
    }
  }

  goToTop() {
    window.scrollTo(0, 0);
  }
}
