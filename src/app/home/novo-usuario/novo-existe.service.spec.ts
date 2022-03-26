import { TestBed } from '@angular/core/testing';

import { UsuarioExisteService } from './novo-existe.service';

describe('NovoExisteService', () => {
  let service: UsuarioExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
