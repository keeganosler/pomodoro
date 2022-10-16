import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConversion',
})
export class TimeConversionPipe implements PipeTransform {
  transform(value: number, inputUnits: string, outputUnits: string): number {
    if (inputUnits === 'sec' && outputUnits === 'min') {
      return value / 60;
    } else if (inputUnits === 'sec' && outputUnits === 'msec') {
      return value * 1000;
    } else if (inputUnits === 'min' && outputUnits === 'sec') {
      return value * 60;
    }
    return value;
  }
}
