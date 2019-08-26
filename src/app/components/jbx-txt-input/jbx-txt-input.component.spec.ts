import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbxTxtInputComponent } from './jbx-txt-input.component';

describe('JbxTxtInputComponent', () => {
  let component: JbxTxtInputComponent;
  let fixture: ComponentFixture<JbxTxtInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbxTxtInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbxTxtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
