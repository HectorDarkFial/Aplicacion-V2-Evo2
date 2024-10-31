import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DespachoPage } from './despacho.page';

describe('DespachoPage', () => {
  let component: DespachoPage;
  let fixture: ComponentFixture<DespachoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DespachoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
