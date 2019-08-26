import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgsidebarComponent } from './pgsidebar.component';

describe('PgsidebarComponent', () => {
  let component: PgsidebarComponent;
  let fixture: ComponentFixture<PgsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
