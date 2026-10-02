import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgcGridLite } from 'igniteui-grid-lite';
import { defineComponents } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { EmployeesType } from '../models/northwind/employees-type';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcGridLite);

@Component({
  selector: 'app-club-dashboard',
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxCategoryChartModule, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './club-dashboard.component.html',
  styleUrls: ['./club-dashboard.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubDashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public eventsListSelectedItem?: string;
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    public financialService: FinancialService,
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.financialBoxOfficeRevenue = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.northwindEmployees = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
