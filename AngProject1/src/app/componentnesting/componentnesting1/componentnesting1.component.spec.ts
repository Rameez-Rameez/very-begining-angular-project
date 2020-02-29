import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentnesting1Component } from './componentnesting1.component';

describe('Componentnesting1Component', () => {
  let component: Componentnesting1Component;
  let fixture: ComponentFixture<Componentnesting1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentnesting1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentnesting1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
