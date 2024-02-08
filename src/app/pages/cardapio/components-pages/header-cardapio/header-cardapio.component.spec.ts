import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCardapioComponent } from './header-cardapio.component';

describe('HeaderCardapioComponent', () => {
  let component: HeaderCardapioComponent;
  let fixture: ComponentFixture<HeaderCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCardapioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
