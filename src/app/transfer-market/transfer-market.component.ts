import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-transfer-market',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxIconComponent, IgxButtonDirective, FormsModule],
  templateUrl: './transfer-market.component.html',
  styleUrls: ['./transfer-market.component.scss']
})
export class TransferMarketComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public value?: string;
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
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
