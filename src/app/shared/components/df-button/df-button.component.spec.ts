import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfButtonComponent } from './df-button.component';

describe('DfButtonComponent', () => {
  let component: DfButtonComponent;
  let fixture: ComponentFixture<DfButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DfButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
