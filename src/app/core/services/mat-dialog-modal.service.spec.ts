import { TestBed } from '@angular/core/testing';

import { MatDialogModalService } from './mat-dialog-modal.service';

describe('MatDialogModalService', () => {
  let service: MatDialogModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatDialogModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
