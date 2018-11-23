import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyClipBoardComponent } from './copy-clip-board.component';

describe('CopyClipBoardComponent', () => {
  let component: CopyClipBoardComponent;
  let fixture: ComponentFixture<CopyClipBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyClipBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyClipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
