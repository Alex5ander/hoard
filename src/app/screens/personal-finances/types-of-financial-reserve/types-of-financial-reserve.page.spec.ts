import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypesOfFinancialReservePage } from './types-of-financial-reserve.page';

describe('TypesOfFinancialReservePage', () => {
  let component: TypesOfFinancialReservePage;
  let fixture: ComponentFixture<TypesOfFinancialReservePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfFinancialReservePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypesOfFinancialReservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
