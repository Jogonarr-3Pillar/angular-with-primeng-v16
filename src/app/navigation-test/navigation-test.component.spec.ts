import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTestComponent } from './navigation-test.component';

describe('NavigationTestComponent', () => {
  let component: NavigationTestComponent;
  let fixture: ComponentFixture<NavigationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
