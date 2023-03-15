import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherservicepageComponent } from './otherservicepage.component';

describe('OtherservicepageComponent', () => {
  let component: OtherservicepageComponent;
  let fixture: ComponentFixture<OtherservicepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherservicepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherservicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
