import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDonateComponent } from './why-donate.component';

describe('WhyDonateComponent', () => {
  let component: WhyDonateComponent;
  let fixture: ComponentFixture<WhyDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
