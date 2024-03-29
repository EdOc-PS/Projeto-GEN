import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFilterComponent } from './section-filter.component';

describe('SectionFilterComponent', () => {
  let component: SectionFilterComponent;
  let fixture: ComponentFixture<SectionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
