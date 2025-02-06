import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecarioListarComponent } from './bibliotecario-listar.component';

describe('BibliotecarioListarComponent', () => {
  let component: BibliotecarioListarComponent;
  let fixture: ComponentFixture<BibliotecarioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliotecarioListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
