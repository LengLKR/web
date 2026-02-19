import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineProfileComponent } from './line-profile.component';

describe('LineProfileComponent', () => {
  let component: LineProfileComponent;
  let fixture: ComponentFixture<LineProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
