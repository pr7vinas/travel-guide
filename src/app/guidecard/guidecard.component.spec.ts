import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidecardComponent } from './guidecard.component';

describe('GuidecardComponent', () => {
  let component: GuidecardComponent;
  let fixture: ComponentFixture<GuidecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
