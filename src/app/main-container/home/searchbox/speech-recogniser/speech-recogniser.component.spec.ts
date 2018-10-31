import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechRecogniserComponent } from './speech-recogniser.component';

describe('SpeechRecogniserComponent', () => {
  let component: SpeechRecogniserComponent;
  let fixture: ComponentFixture<SpeechRecogniserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechRecogniserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechRecogniserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
