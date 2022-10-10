import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TimerMainComponent } from './components/timer-main/timer-main.component';
import { TimerTypeSwitcherComponent } from './components/timer-type-switcher/timer-type-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerTypeSwitcherComponent,
    TimerMainComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
