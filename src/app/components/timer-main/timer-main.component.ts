import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer-main',
  templateUrl: './timer-main.component.html',
  styleUrls: ['./timer-main.component.scss'],
})
export class TimerMainComponent implements OnInit {
  constructor(public timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.currentTime$.subscribe((t) => {
      console.log('current time in component: ', t);
    });
  }

  onClick1() {
    this.timerService.startTimer();
  }

  onClick2() {
    this.timerService.stopTimer();
  }
}
