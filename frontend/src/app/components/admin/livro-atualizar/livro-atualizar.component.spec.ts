import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroAtualizarComponent } from './livro-atualizar.component';

describe('LivroAtualizarComponent', () => {
  let component: LivroAtualizarComponent;
  let fixture: ComponentFixture<LivroAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
