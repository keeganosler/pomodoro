import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { faCheck, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { TimeConversionPipe } from '../../pipes/time-conversion.pipe';
import { ThemeService } from '../../services/theme.service';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [UntypedFormBuilder, TimeConversionPipe],
})
export class SettingsComponent implements OnInit {
  timesFormGroup: UntypedFormGroup = new UntypedFormGroup({});
  faSun = faSun;
  faMoon = faMoon;
  faCheck = faCheck;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private timerService: TimerService,
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    private timeConversionPipe: TimeConversionPipe
  ) {
    this.timesFormGroup = formBuilder.group({
      pomodoro: [
        this.timeConversionPipe.transform(
          this.timerService.times['pomodoro'],
          'sec',
          'min'
        ) || '',
      ],
      shortBreak: [
        this.timeConversionPipe.transform(
          this.timerService.times['shortBreak'],
          'sec',
          'min'
        ) || '',
      ],
      longBreak: [
        this.timeConversionPipe.transform(
          this.timerService.times['longBreak'],
          'sec',
          'min'
        ) || '',
      ],
    });
  }

  isMobile = true;
  isMobile$: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );

  ngOnInit(): void {
    this.isMobile$.subscribe((val) => {
      this.isMobile = val.matches;
    });
    this.timesFormGroup.get('pomodoro')?.valueChanges.subscribe((t) => {
      this.timerService.times['pomodoro'] = this.timeConversionPipe.transform(
        t,
        'min',
        'sec'
      );
      this.timerService.currentTime =
        this.timerService.times[this.timerService.timerType];
    });
    this.timesFormGroup.get('shortBreak')?.valueChanges.subscribe((t) => {
      this.timerService.times['shortBreak'] = this.timeConversionPipe.transform(
        t,
        'min',
        'sec'
      );
      this.timerService.currentTime =
        this.timerService.times[this.timerService.timerType];
    });
    this.timesFormGroup.get('longBreak')?.valueChanges.subscribe((t) => {
      this.timerService.times['longBreak'] = this.timeConversionPipe.transform(
        t,
        'min',
        'sec'
      );
      this.timerService.currentTime =
        this.timerService.times[this.timerService.timerType];
    });
  }

  onUpdateColor(color: string) {
    this.themeService.onUpdateColor(color);
  }

  onUpdateFont(font: string) {
    this.themeService.onUpdateFont(font);
  }

  onUpdateLightMode(lightMode: boolean) {
    this.themeService.onUpdateLightMode(lightMode);
  }

  getIsColor(color: string): boolean {
    return this.themeService.getIsColor(color);
  }

  getIsFont(font: string): boolean {
    return this.themeService.getIsFont(font);
  }

  getIsLightMode(): boolean {
    return this.themeService.getIsLightMode();
  }
}
