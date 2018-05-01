import { TestBed, inject } from '@angular/core/testing';

import { FriendlistService } from './friendlist.service';

describe('FriendlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendlistService]
    });
  });

  it('should be created', inject([FriendlistService], (service: FriendlistService) => {
    expect(service).toBeTruthy();
  }));
});
