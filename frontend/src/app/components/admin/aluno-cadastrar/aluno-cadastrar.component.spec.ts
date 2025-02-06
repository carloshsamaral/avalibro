import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCadastrarComponent } from './aluno-cadastrar.component';

describe('AlunoCadastrarComponent', () => {
  let component: AlunoCadastrarComponent;
  let fixture: ComponentFixture<AlunoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
