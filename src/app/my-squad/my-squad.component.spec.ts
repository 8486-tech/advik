import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';
import { MySquadComponent } from './my-squad.component';

describe('MySquadComponent', () => {
  let component: MySquadComponent;
  let fixture: ComponentFixture<MySquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySquadComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
