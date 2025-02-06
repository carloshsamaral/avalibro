import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAtualizarComponent } from './professor-atualizar.component';

describe('ProfessorAtualizarComponent', () => {
  let component: ProfessorAtualizarComponent;
  let fixture: ComponentFixture<ProfessorAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
