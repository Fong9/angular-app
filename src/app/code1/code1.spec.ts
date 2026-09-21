import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code1 } from './code1';

describe('Code1', () => {
  let component: Code1;
  let fixture: ComponentFixture<Code1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Code1],
    }).compileComponents();

    fixture = TestBed.createComponent(Code1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
