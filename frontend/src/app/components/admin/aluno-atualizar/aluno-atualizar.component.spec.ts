import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAtualizarComponent } from './aluno-atualizar.component';

describe('AlunoAtualizarComponent', () => {
  let component: AlunoAtualizarComponent;
  let fixture: ComponentFixture<AlunoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
