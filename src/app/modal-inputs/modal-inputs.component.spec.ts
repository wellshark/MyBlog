import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInputsComponent } from './modal-inputs.component';

describe('ModalInputsComponent', () => {
  let component: ModalInputsComponent;
  let fixture: ComponentFixture<ModalInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
