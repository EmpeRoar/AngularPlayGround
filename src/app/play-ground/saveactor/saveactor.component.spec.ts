import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveactorComponent } from './saveactor.component';

describe('SaveactorComponent', () => {
  let component: SaveactorComponent;
  let fixture: ComponentFixture<SaveactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
