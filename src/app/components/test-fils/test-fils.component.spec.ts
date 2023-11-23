import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFilsComponent } from './test-fils.component';

describe('TestFilsComponent', () => {
  let component: TestFilsComponent;
  let fixture: ComponentFixture<TestFilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFilsComponent]
    });
    fixture = TestBed.createComponent(TestFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
