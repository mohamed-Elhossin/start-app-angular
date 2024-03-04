import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogComponent } from './update-blog.component';

describe('UpdateBlogComponent', () => {
  let component: UpdateBlogComponent;
  let fixture: ComponentFixture<UpdateBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBlogComponent]
    });
    fixture = TestBed.createComponent(UpdateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
