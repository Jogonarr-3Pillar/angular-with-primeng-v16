import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { TreeModule } from 'primeng/tree';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NavigationTestComponent } from './navigation-test/navigation-test.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { ChartComponent } from './chart/chart.component';
import { TreeComponent } from './tree/tree.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NavigationTestComponent,
    PanelMenuComponent,
    ChartComponent,
    TreeComponent,
    MultiSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MenubarModule,
    PanelMenuModule,
    PanelModule,
    DividerModule,
    ChartModule,
    TreeModule,
    MultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
