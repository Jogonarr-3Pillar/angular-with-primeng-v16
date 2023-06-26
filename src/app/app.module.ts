import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NavigationTestComponent } from './navigation-test/navigation-test.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NavigationTestComponent,
    PanelMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MenubarModule,
    PanelMenuModule,
    PanelModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
