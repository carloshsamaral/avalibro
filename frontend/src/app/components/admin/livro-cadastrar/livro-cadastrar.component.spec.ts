import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCadastrarComponent } from './livro-cadastrar.component';

describe('LivroCadastrarComponent', () => {
  let component: LivroCadastrarComponent;
  let fixture: ComponentFixture<LivroCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
