import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNilaiComponent } from './input-nilai.component';

describe('InputNilaiComponent', () => {
  let component: InputNilaiComponent;
  let fixture: ComponentFixture<InputNilaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
