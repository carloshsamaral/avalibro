import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoAtualizarComponent } from './avaliacao-atualizar.component';

describe('AvaliacaoAtualizarComponent', () => {
  let component: AvaliacaoAtualizarComponent;
  let fixture: ComponentFixture<AvaliacaoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
