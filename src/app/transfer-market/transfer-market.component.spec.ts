import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IGX_GRID_DIRECTIVES } from 'igniteui-angular';
import { TransferMarketComponent } from './transfer-market.component';

describe('TransferMarketComponent', () => {
  let component: TransferMarketComponent;
  let fixture: ComponentFixture<TransferMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferMarketComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IGX_GRID_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
