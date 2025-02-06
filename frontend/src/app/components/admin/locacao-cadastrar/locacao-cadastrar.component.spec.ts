import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoCadastrarComponent } from './locacao-cadastrar.component';

describe('LocacaoCadastrarComponent', () => {
  let component: LocacaoCadastrarComponent;
  let fixture: ComponentFixture<LocacaoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocacaoCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocacaoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
