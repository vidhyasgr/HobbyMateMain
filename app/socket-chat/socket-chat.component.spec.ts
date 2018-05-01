import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketChatComponent } from './socket-chat.component';

describe('SocketChatComponent', () => {
  let component: SocketChatComponent;
  let fixture: ComponentFixture<SocketChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
