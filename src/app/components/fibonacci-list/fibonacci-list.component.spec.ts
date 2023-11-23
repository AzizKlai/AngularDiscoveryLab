import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciListComponent } from './fibonacci-list.component';

describe('FibonacciListComponent', () => {
  let component: FibonacciListComponent;
  let fixture: ComponentFixture<FibonacciListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciListComponent]
    });
    fixture = TestBed.createComponent(FibonacciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
