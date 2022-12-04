import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { faCheck, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { COLORS, FONTS, TIMES } from '../../app.contants';
import { TimeConversionPipe } from '../../pipes/time-conversion.pipe';
import { ThemeService } from '../../services/theme.service';
import { TimerService } from '../../services/timer.service';

import { Store } from '@ngrx/store';
import { returnColor } from '../../state/selectors/color.selector';
import { returnFont } from '../../state/selectors/font.selector';

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
    private timeConversionPipe: TimeConversionPipe,
    private store: Store
  ) {
    this.createFormGroup();
  }

  isMobile = true;
  isMobile$: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );

  times = TIMES;
  colors = COLORS;
  fonts = FONTS;

  color$ = this.store.select(returnColor);
  font$ = this.store.select(returnFont);

  ngOnInit(): void {
    this.isMobile$.subscribe((val) => {
      this.isMobile = val.matches;
    });
    TIMES.forEach((time) => {
      this.timesFormGroup.get(time.type)?.valueChanges.subscribe((t) => {
        this.timerService.times[time.type] = this.timeConversionPipe.transform(
          t,
          'min',
          'sec'
        );
        this.timerService.currentTime =
          this.timerService.times[this.timerService.timerType];
      });
    });
  }

  createFormGroup() {
    this.timesFormGroup = this.formBuilder.group({
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

  onUpdateColor(colorClassName: string) {
    this.themeService.onUpdateColor(colorClassName);
  }

  onUpdateFont(fontClassName: string) {
    this.themeService.onUpdateFont(fontClassName);
  }

  onUpdateLightMode(lightMode: boolean) {
    this.themeService.onUpdateLightMode(lightMode);
  }

  getIsSelected(className: string) {
    return this.themeService.classList.includes(className);
  }
}
