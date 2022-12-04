import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TimerMainComponent } from './components/timer-main/timer-main.component';
import { TimerTypeSwitcherComponent } from './components/timer-type-switcher/timer-type-switcher.component';
import { CamelcaseToTitlecasePipe } from './pipes/camelcase-to-titlecase.pipe';
import { TimeConversionPipe } from './pipes/time-conversion.pipe';
import { colorReducer } from './state/reducers/color.reducer';
import { fontReducer } from './state/reducers/font.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TimerTypeSwitcherComponent,
    TimerMainComponent,
    SettingsComponent,
    CamelcaseToTitlecasePipe,
    TimeConversionPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatIconModule,
    StoreModule.forRoot({ color: colorReducer, font: fontReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
