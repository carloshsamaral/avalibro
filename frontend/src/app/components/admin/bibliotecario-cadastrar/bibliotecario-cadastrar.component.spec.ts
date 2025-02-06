import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecarioCadastrarComponent } from './bibliotecario-cadastrar.component';

describe('BibliotecarioCadastrarComponent', () => {
  let component: BibliotecarioCadastrarComponent;
  let fixture: ComponentFixture<BibliotecarioCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliotecarioCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecarioCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
