import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServicesComponent } from './update-services.component';

describe('UpdateServicesComponent', () => {
  let component: UpdateServicesComponent;
  let fixture: ComponentFixture<UpdateServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateServicesComponent]
    });
    fixture = TestBed.createComponent(UpdateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
