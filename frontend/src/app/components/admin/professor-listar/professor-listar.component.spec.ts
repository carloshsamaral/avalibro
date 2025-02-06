import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorListarComponent } from './professor-listar.component';

describe('ProfessorListarComponent', () => {
  let component: ProfessorListarComponent;
  let fixture: ComponentFixture<ProfessorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
