import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageS2Component } from './package-s2.component';

describe('PackageS2Component', () => {
  let component: PackageS2Component;
  let fixture: ComponentFixture<PackageS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
