import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ItemComponent } from './drawer/item/item.component';
import { FormsModule } from '@angular/forms';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    ItemComponent,
    EmptyStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
