import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuesListComponent } from './statues-list.component';

describe('StatuesListComponent', () => {
  let component: StatuesListComponent;
  let fixture: ComponentFixture<StatuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
