import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageS1Component } from './package-s1.component';

describe('PackageS1Component', () => {
  let component: PackageS1Component;
  let fixture: ComponentFixture<PackageS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
