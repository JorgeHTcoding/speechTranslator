import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTranslatorComponent } from './vista-translator.component';

describe('VistaTranslatorComponent', () => {
  let component: VistaTranslatorComponent;
  let fixture: ComponentFixture<VistaTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTranslatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
