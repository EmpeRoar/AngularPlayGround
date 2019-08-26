import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformxComponent } from './ngformx.component';

describe('NgformxComponent', () => {
  let component: NgformxComponent;
  let fixture: ComponentFixture<NgformxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgformxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgformxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
