import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCadastrarComponent } from './professor-cadastrar.component';

describe('ProfessorCadastrarComponent', () => {
  let component: ProfessorCadastrarComponent;
  let fixture: ComponentFixture<ProfessorCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
