import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileimageComponent } from './mobileimage.component';

describe('MobileimageComponent', () => {
  let component: MobileimageComponent;
  let fixture: ComponentFixture<MobileimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
