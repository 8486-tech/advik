import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';
import { PackStoreComponent } from './pack-store.component';

describe('PackStoreComponent', () => {
  let component: PackStoreComponent;
  let fixture: ComponentFixture<PackStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackStoreComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
