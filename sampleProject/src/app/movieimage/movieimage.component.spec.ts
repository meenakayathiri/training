import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieimageComponent } from './movieimage.component';

describe('MovieimageComponent', () => {
  let component: MovieimageComponent;
  let fixture: ComponentFixture<MovieimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
