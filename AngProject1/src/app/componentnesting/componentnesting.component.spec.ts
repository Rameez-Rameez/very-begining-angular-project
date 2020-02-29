import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentnestingComponent } from './componentnesting.component';

describe('ComponentnestingComponent', () => {
  let component: ComponentnestingComponent;
  let fixture: ComponentFixture<ComponentnestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentnestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentnestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
