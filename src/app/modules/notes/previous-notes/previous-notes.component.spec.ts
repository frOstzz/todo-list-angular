import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousNotesComponent } from './previous-notes.component';

describe('PreviousNotesComponent', () => {
  let component: PreviousNotesComponent;
  let fixture: ComponentFixture<PreviousNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
