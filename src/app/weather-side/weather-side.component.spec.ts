import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSideComponent } from './weather-side.component';

describe('WeatherSideComponent', () => {
  let component: WeatherSideComponent;
  let fixture: ComponentFixture<WeatherSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
