import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledescriptionComponent } from './mobiledescription.component';

describe('MobiledescriptionComponent', () => {
  let component: MobiledescriptionComponent;
  let fixture: ComponentFixture<MobiledescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
