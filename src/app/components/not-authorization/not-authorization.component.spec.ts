import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorizationComponent } from './not-authorization.component';

describe('NotAuthorizationComponent', () => {
  let component: NotAuthorizationComponent;
  let fixture: ComponentFixture<NotAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
