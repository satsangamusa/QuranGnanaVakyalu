import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LettersPage } from './letters.page';

describe('LettersPage', () => {
  let component: LettersPage;
  let fixture: ComponentFixture<LettersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LettersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
