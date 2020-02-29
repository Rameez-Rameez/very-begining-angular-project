import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeractivesComponent } from './deractives.component';

describe('DeractivesComponent', () => {
  let component: DeractivesComponent;
  let fixture: ComponentFixture<DeractivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeractivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeractivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
