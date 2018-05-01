import { TestBed, inject } from '@angular/core/testing';

import { MostRecentChatService } from './most-recent-chat.service';

describe('MostRecentChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MostRecentChatService]
    });
  });

  it('should be created', inject([MostRecentChatService], (service: MostRecentChatService) => {
    expect(service).toBeTruthy();
  }));
});
