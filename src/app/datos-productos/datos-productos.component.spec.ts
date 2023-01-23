import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosProductosComponent } from './datos-productos.component';

describe('DatosProductosComponent', () => {
  let component: DatosProductosComponent;
  let fixture: ComponentFixture<DatosProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
