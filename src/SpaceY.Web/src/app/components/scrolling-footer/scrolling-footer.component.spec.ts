import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingFooterComponent } from './scrolling-footer.component';

describe('ScrollingFooterComponent', () => {
  let component: ScrollingFooterComponent;
  let fixture: ComponentFixture<ScrollingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
