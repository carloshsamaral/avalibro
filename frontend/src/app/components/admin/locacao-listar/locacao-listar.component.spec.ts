import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoListarComponent } from './locacao-listar.component';

describe('LocacaoListarComponent', () => {
  let component: LocacaoListarComponent;
  let fixture: ComponentFixture<LocacaoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocacaoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocacaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
