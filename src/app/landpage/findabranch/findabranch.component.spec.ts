import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindabranchComponent } from './findabranch.component';

describe('FindabranchComponent', () => {
  let component: FindabranchComponent;
  let fixture: ComponentFixture<FindabranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindabranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindabranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
