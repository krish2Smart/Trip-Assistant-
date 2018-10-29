import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechActionCommandComponent } from './speech-action-command.component';

describe('SpeechActionCommandComponent', () => {
  let component: SpeechActionCommandComponent;
  let fixture: ComponentFixture<SpeechActionCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechActionCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechActionCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
