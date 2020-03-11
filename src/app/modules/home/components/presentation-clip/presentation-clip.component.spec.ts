import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationClipComponent } from './presentation-clip.component';

describe('PresentationClipComponent', () => {
  let component: PresentationClipComponent;
  let fixture: ComponentFixture<PresentationClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationClipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
