import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setec } from './setec';

describe('Setec', () => {
  let component: Setec;
  let fixture: ComponentFixture<Setec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setec],
    }).compileComponents();

    fixture = TestBed.createComponent(Setec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
