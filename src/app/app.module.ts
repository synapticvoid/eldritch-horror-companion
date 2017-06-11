import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule,
  MdSelectModule
} from '@angular/material';
import { MenuRoutingComponent } from './menu-routing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemModule } from './item/item.module';

import '../styles/core.less';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { LanguageSelectorComponent } from './language-selector.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdButtonModule,
    appRoutes,
    MdToolbarModule,
    MdSidenavModule,
    FlexLayoutModule,
    ItemModule,
    MdSelectModule,
    FormsModule
  ],
  declarations: [
    MenuRoutingComponent, LanguageSelectorComponent
  ],
  bootstrap: [MenuRoutingComponent],
  providers: []
})
export class AppModule {
}


