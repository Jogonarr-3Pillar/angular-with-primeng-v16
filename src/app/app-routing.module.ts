import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavigationTestComponent } from './navigation-test/navigation-test.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'components', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'components/panel-menu', component: PanelMenuComponent },
  { path: 'components/chart', component: ChartComponent },
  { path: 'navigation-test', component: NavigationTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
