import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSearchsComponent } from './last-searchs.component';

describe('LastSearchsComponent', () => {
  let component: LastSearchsComponent;
  let fixture: ComponentFixture<LastSearchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSearchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
