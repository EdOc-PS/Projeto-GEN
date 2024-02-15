import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAccountComponent } from './footer-account.component';

describe('FooterAccountComponent', () => {
  let component: FooterAccountComponent;
  let fixture: ComponentFixture<FooterAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
