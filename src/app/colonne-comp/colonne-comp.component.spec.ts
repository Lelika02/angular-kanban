import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonneCompComponent } from './colonne-comp.component';

describe('ColonneCompComponent', () => {
  let component: ColonneCompComponent;
  let fixture: ComponentFixture<ColonneCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonneCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColonneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
