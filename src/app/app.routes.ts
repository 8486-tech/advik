import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { MasterViewComponent } from './master-view/master-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master-View' } },
  { path: '**', component: NotFound } // must always be last
];
