import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepurchaseComponent } from './createpurchase.component';

describe('CreatepurchaseComponent', () => {
  let component: CreatepurchaseComponent;
  let fixture: ComponentFixture<CreatepurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
