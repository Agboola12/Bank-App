import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcctComponent } from './new-acct.component';

describe('NewAcctComponent', () => {
  let component: NewAcctComponent;
  let fixture: ComponentFixture<NewAcctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAcctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
