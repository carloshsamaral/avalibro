import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoAtualizarComponent } from './locacao-atualizar.component';

describe('LocacaoAtualizarComponent', () => {
  let component: LocacaoAtualizarComponent;
  let fixture: ComponentFixture<LocacaoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocacaoAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocacaoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
