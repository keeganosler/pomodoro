import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [UntypedFormBuilder],
})
export class SettingsComponent implements OnInit {
  timesFormGroup: UntypedFormGroup = new UntypedFormGroup({});
  color: string = '1';
  font: string = '1';
  lightMode: boolean = true;
  faSun = faSun;
  faMoon = faMoon;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private timerService: TimerService,
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.timesFormGroup = formBuilder.group({
      pomodoro: [this.timerService.times['pomodoro'] || ''],
      shortBreak: [this.timerService.times['shortBreak'] || ''],
      longBreak: [this.timerService.times['longBreak'] || ''],
    });
  }

  isMobile = true;
  isMobile$: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );

  ngOnInit(): void {
    this.onSaveSettings(); // set initial settings
    this.isMobile$.subscribe((val) => {
      this.isMobile = val.matches;
    });
  }

  onUpdateColor(color: string) {
    this.color = color;
  }

  onUpdateFont(font: string) {
    this.font = font;
  }

  onUpdateLightMode(lightMode: boolean) {
    this.lightMode = lightMode;
  }

  onSaveSettings() {
    this.timerService.times['pomodoro'] =
      this.timesFormGroup.get('pomodoro')?.value;
    this.timerService.times['shortBreak'] =
      this.timesFormGroup.get('shortBreak')?.value;
    this.timerService.times['longBreak'] =
      this.timesFormGroup.get('longBreak')?.value;

    this.themeService.onUpdateColor(this.color);
    this.themeService.onUpdateFont(this.font);
    this.themeService.onUpdateLightMode(this.lightMode);
  }
}
