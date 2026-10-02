import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ClubDashboardComponent } from './club-dashboard/club-dashboard.component';
import { MySquadComponent } from './my-squad/my-squad.component';
import { TransferMarketComponent } from './transfer-market/transfer-market.component';
import { PackStoreComponent } from './pack-store/pack-store.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'landing-page', component: LandingPageComponent, data: { text: 'Landing-Page' } },
  { path: 'sign-in', component: SignInComponent, data: { text: 'Sign-In' } },
  { path: 'create-account', component: CreateAccountComponent, data: { text: 'Create-Account' } },
  { path: 'club-dashboard', component: ClubDashboardComponent, data: { text: 'Club-Dashboard' } },
  { path: 'my-squad', component: MySquadComponent, data: { text: 'My-Squad' } },
  { path: 'transfer-market', component: TransferMarketComponent, data: { text: 'Transfer-Market' } },
  { path: 'pack-store', component: PackStoreComponent, data: { text: 'Pack-Store' } },
  { path: '**', component: NotFound } // must always be last
];
