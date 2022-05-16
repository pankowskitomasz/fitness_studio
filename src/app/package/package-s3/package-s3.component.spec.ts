import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageS3Component } from './package-s3.component';

describe('PackageS3Component', () => {
  let component: PackageS3Component;
  let fixture: ComponentFixture<PackageS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
