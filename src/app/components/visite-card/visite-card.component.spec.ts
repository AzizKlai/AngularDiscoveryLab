import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteCardComponent } from './visite-card.component';

describe('VisiteCardComponent', () => {
  let component: VisiteCardComponent;
  let fixture: ComponentFixture<VisiteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisiteCardComponent]
    });
    fixture = TestBed.createComponent(VisiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
