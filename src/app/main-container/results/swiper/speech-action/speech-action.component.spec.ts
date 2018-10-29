import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechActionComponent } from './speech-action.component';

describe('SpeechActionComponent', () => {
  let component: SpeechActionComponent;
  let fixture: ComponentFixture<SpeechActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
