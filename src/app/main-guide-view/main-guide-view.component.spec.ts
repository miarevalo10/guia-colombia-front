import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGuideViewComponent } from './main-guide-view.component';

describe('MainGuideViewComponent', () => {
  let component: MainGuideViewComponent;
  let fixture: ComponentFixture<MainGuideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGuideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGuideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
