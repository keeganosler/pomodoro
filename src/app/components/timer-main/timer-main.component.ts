import { Component, OnInit } from '@angular/core';
import {
  faPause,
  faPlay,
  faRotateLeft,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer-main',
  templateUrl: './timer-main.component.html',
  styleUrls: ['./timer-main.component.scss'],
})
export class TimerMainComponent implements OnInit {
  faPlay = faPlay;
  faPause = faPause;
  faRotateLeft = faRotateLeft;
  constructor(public timerService: TimerService) {}

  timerOn: boolean = false;

  ngOnInit(): void {}

  onStartTimer() {
    this.timerService.startTimer();
    this.timerOn = true;
  }

  onStopTimer() {
    this.timerService.stopTimer();
    this.timerOn = false;
  }

  onClearTimer() {
    this.onStopTimer();
    this.timerService.currentTime =
      this.timerService.times[this.timerService.timerType];
  }

  get timeToDisplay(): number {
    return this.timerService.currentTime;
  }

  get timerProgress(): number {
    return (
      100 -
      100 *
        (this.timerService.currentTime /
          this.timerService.times[this.timerService.timerType])
    );
  }

  get playPauseIcon(): IconDefinition {
    return this.timerOn ? faPause : faPlay;
  }
}
