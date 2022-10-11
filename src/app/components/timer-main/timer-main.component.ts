import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer-main',
  templateUrl: './timer-main.component.html',
  styleUrls: ['./timer-main.component.scss'],
})
export class TimerMainComponent implements OnInit {
  faCoffee = faCoffee;
  constructor(public timerService: TimerService) {}

  ngOnInit(): void {}

  onClick1() {
    this.timerService.startTimer();
  }

  onClick2() {
    this.timerService.stopTimer();
  }

  get timerProgress(): number {
    return (
      100 -
      100 *
        (this.timerService.currentTime /
          this.timerService.times[this.timerService.timerType])
    );
  }
}
