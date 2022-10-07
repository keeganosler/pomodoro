import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerTypeSwitcherComponent } from './components/timer-type-switcher/timer-type-switcher.component';
import { TimerMainComponent } from './components/timer-main/timer-main.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerTypeSwitcherComponent,
    TimerMainComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
