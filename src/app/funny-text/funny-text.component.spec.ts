import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnyTextComponent } from './funny-text.component';

describe('FunnyTextComponent', () => {
  let component: FunnyTextComponent;
  let fixture: ComponentFixture<FunnyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunnyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
