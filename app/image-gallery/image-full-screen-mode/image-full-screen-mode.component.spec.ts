import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFullScreenModeComponent } from './image-full-screen-mode.component';

describe('ImageFullScreenModeComponent', () => {
  let component: ImageFullScreenModeComponent;
  let fixture: ComponentFixture<ImageFullScreenModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFullScreenModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFullScreenModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
