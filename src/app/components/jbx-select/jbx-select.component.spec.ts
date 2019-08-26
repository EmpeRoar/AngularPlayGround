import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbxSelectComponent } from './jbx-select.component';

describe('JbxSelectComponent', () => {
  let component: JbxSelectComponent;
  let fixture: ComponentFixture<JbxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
