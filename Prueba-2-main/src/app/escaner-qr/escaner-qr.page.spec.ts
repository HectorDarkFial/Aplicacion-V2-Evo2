import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanerQRPage } from './escaner-qr.page';

describe('EscanerQRPage', () => {
  let component: EscanerQRPage;
  let fixture: ComponentFixture<EscanerQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanerQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
