import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHighlightComponent } from './section-highlight.component';

describe('SectionHighlightComponent', () => {
  let component: SectionHighlightComponent;
  let fixture: ComponentFixture<SectionHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
