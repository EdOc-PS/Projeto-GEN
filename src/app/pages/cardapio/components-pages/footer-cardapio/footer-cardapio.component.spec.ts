import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCardapioComponent } from './footer-cardapio.component';

describe('FooterCardapioComponent', () => {
  let component: FooterCardapioComponent;
  let fixture: ComponentFixture<FooterCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCardapioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
