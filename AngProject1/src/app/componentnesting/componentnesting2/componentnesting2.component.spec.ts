import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentnesting2Component } from './componentnesting2.component';

describe('Componentnesting2Component', () => {
  let component: Componentnesting2Component;
  let fixture: ComponentFixture<Componentnesting2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentnesting2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentnesting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
