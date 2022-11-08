import { Injectable } from '@angular/core';
import { Observable, scan, Subscription, take, timer } from 'rxjs';
import { TIMES } from '../app.contants';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  times: { [key: string]: number } = {
    pomodoro: TIMES[0].defaultTime,
    shortBreak: TIMES[1].defaultTime,
    longBreak: TIMES[2].defaultTime,
  };

  timerType: string = 'pomodoro';

  setTimerType(value: string) {
    this.timerType = value;
    this.stopTimer();
    this.currentTime = this.times[this.timerType];
  }

  currentTime: number = this.times[this.timerType];
  currentTime$: Observable<number> = new Observable();
  timerSub: Subscription = new Subscription();

  startTimer() {
    let startTime: number =
      this.currentTime === 0 ? this.times[this.timerType] : this.currentTime;
    this.currentTime$ = timer(0, 1000).pipe(
      scan((x) => --x, startTime),
      take(startTime)
    );
    this.timerSub = this.currentTime$.subscribe((t) => {
      this.currentTime = t;
    });
  }

  stopTimer() {
    this.timerSub.unsubscribe();
  }
}
