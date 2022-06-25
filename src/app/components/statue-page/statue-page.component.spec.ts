import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuePageComponent } from './statue-page.component';

describe('StatuePageComponent', () => {
  let component: StatuePageComponent;
  let fixture: ComponentFixture<StatuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
