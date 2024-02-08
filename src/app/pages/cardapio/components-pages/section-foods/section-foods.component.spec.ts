import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFoodsComponent } from './section-foods.component';

describe('SectionFoodsComponent', () => {
  let component: SectionFoodsComponent;
  let fixture: ComponentFixture<SectionFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
