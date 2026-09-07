import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework2 } from './homework2';

describe('Homework2', () => {
  let component: Homework2;
  let fixture: ComponentFixture<Homework2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homework2],
    }).compileComponents();

    fixture = TestBed.createComponent(Homework2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
