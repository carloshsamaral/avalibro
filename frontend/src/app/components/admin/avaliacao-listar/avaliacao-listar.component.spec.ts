import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoListarComponent } from './avaliacao-listar.component';

describe('AvaliacaoListarComponent', () => {
  let component: AvaliacaoListarComponent;
  let fixture: ComponentFixture<AvaliacaoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
