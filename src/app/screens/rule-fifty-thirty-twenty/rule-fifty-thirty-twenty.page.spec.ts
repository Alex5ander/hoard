import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RuleFiftyThirtyTwentyPage } from './rule-fifty-thirty-twenty.page';

describe('RuleFiftyThirtyTwentyPage', () => {
  let component: RuleFiftyThirtyTwentyPage;
  let fixture: ComponentFixture<RuleFiftyThirtyTwentyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleFiftyThirtyTwentyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RuleFiftyThirtyTwentyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
