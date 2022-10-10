import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  onUpdateColor(color: string) {
    if (this.document.documentElement.classList.value.includes('color')) {
      let i = this.document.documentElement.classList.value.indexOf('color');
      this.document.documentElement.classList.replace(
        this.document.documentElement.classList[i],
        'color' + '-' + color
      );
    } else {
      this.document.documentElement.classList.add('color' + '-' + color);
    }
  }
}
