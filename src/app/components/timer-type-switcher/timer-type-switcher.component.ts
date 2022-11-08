import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { TIMES } from '../../app.contants';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer-type-switcher',
  templateUrl: './timer-type-switcher.component.html',
  styleUrls: ['./timer-type-switcher.component.scss'],
})
export class TimerTypeSwitcherComponent implements OnInit {
  constructor(private timerService: TimerService) {}
  times = TIMES;

  ngOnInit(): void {}

  setTimerType(e: MatButtonToggleChange) {
    this.timerService.setTimerType(e.value);
  }

  get timerType(): string {
    return this.timerService.timerType;
  }
}
