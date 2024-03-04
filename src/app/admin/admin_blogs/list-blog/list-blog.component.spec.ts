import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogComponent } from './list-blog.component';

describe('ListBlogComponent', () => {
  let component: ListBlogComponent;
  let fixture: ComponentFixture<ListBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBlogComponent]
    });
    fixture = TestBed.createComponent(ListBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
