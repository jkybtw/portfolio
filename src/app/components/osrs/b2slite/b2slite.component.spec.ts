import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2sliteComponent } from './b2slite.component';

describe('B2sliteComponent', () => {
  let component: B2sliteComponent;
  let fixture: ComponentFixture<B2sliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2sliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2sliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
