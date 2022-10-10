import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [FormBuilder],
})
export class SettingsComponent implements OnInit {
  timesFormGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private timerService: TimerService,
    private themeService: ThemeService
  ) {
    this.timesFormGroup = formBuilder.group({
      pomodoro: [this.timerService.times['pomodoro'] || ''],
      shortBreak: [this.timerService.times['shortBreak'] || ''],
      longBreak: [this.timerService.times['longBreak'] || ''],
    });
  }

  ngOnInit(): void {}

  onUpdateColor(color: string) {
    this.themeService.onUpdateColor(color);
  }

  onSaveSettings() {
    this.timerService.times['pomodoro'] =
      this.timesFormGroup.get('pomodoro')?.value;
    this.timerService.times['shortBreak'] =
      this.timesFormGroup.get('shortBreak')?.value;
    this.timerService.times['longBreak'] =
      this.timesFormGroup.get('longBreak')?.value;
  }
}
