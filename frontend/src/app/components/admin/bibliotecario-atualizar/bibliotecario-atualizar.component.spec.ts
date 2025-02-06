import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecarioAtualizarComponent } from './bibliotecario-atualizar.component';

describe('BibliotecarioAtualizarComponent', () => {
  let component: BibliotecarioAtualizarComponent;
  let fixture: ComponentFixture<BibliotecarioAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliotecarioAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecarioAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
