import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSelectComponent } from './pg-select.component';

describe('PgSelectComponent', () => {
  let component: PgSelectComponent;
  let fixture: ComponentFixture<PgSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
