import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KISSPage } from './kiss.page';

describe('KISSPage', () => {
  let component: KISSPage;
  let fixture: ComponentFixture<KISSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KISSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KISSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
