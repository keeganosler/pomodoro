import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcaseToTitlecase',
})
export class CamelcaseToTitlecasePipe implements PipeTransform {
  transform(value: string): string {
    return (
      value
        .replace(/([A-Z])/g, ' $1')
        .charAt(0)
        .toUpperCase() + value.replace(/([A-Z])/g, ' $1').slice(1)
    );
  }
}
