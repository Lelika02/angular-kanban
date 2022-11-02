import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheCompComponent } from './tache-comp.component';

describe('TacheCompComponent', () => {
  let component: TacheCompComponent;
  let fixture: ComponentFixture<TacheCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
