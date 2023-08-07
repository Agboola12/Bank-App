import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcctComponent } from './all-acct.component';

describe('AllAcctComponent', () => {
  let component: AllAcctComponent;
  let fixture: ComponentFixture<AllAcctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAcctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
