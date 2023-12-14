import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuebecComponent } from './quebec.component';

describe('QuebecComponent', () => {
  let component: QuebecComponent;
  let fixture: ComponentFixture<QuebecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuebecComponent]
    });
    fixture = TestBed.createComponent(QuebecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
