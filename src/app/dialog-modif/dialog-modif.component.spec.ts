import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifComponent } from './dialog-modif.component';

describe('DialogModifComponent', () => {
  let component: DialogModifComponent;
  let fixture: ComponentFixture<DialogModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
