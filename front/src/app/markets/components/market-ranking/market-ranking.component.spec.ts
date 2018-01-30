import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBestComponent } from './market-best.component';

describe('MarketBestComponent', () => {
  let component: MarketBestComponent;
  let fixture: ComponentFixture<MarketBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
