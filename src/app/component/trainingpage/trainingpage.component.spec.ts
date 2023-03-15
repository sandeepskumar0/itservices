import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingpageComponent } from './trainingpage.component';

describe('TrainingpageComponent', () => {
  let component: TrainingpageComponent;
  let fixture: ComponentFixture<TrainingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
