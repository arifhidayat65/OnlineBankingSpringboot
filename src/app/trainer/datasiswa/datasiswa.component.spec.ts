import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasiswaComponent } from './datasiswa.component';

describe('DatasiswaComponent', () => {
  let component: DatasiswaComponent;
  let fixture: ComponentFixture<DatasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
