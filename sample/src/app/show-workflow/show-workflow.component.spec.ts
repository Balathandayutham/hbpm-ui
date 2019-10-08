import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkflowComponent } from './show-workflow.component';

describe('CreateEventComponent', () => {
  let component: ShowWorkflowComponent;
  let fixture: ComponentFixture<ShowWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
