import { TestBed } from '@angular/core/testing';

import { BibliotecarioService } from './bibliotecario.service';

describe('BibliotecarioService', () => {
  let service: BibliotecarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
