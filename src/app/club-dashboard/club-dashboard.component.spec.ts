import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { ClubDashboardComponent } from './club-dashboard.component';

describe('ClubDashboardComponent', () => {
  let component: ClubDashboardComponent;
  let fixture: ComponentFixture<ClubDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubDashboardComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES, IgxCategoryChartModule],
      teardown: { destroyAfterEach: false }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
