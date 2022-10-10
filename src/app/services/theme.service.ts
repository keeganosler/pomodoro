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

  onUpdateFont(font: string) {
    if (this.document.documentElement.classList.value.includes('font')) {
      let i = this.document.documentElement.classList.value.indexOf('font');
      this.document.documentElement.classList.replace(
        this.document.documentElement.classList[i],
        'font' + '-' + font
      );
    } else {
      this.document.documentElement.classList.add('font' + '-' + font);
    }
  }

  onUpdateLightMode(lightMode: boolean) {
    if (lightMode) {
      if (this.document.documentElement.classList.value.includes('dark-mode')) {
        let i =
          this.document.documentElement.classList.value.indexOf('dark-mode');
        this.document.documentElement.classList.replace(
          this.document.documentElement.classList[i],
          'light-mode'
        );
      } else {
        this.document.documentElement.classList.add('light-mode');
      }
    } else {
      if (
        this.document.documentElement.classList.value.includes('light-mode')
      ) {
        let i =
          this.document.documentElement.classList.value.indexOf('light-mode');
        this.document.documentElement.classList.replace(
          this.document.documentElement.classList[i],
          'dark-mode'
        );
      } else {
        this.document.documentElement.classList.add('dark-mode');
      }
    }

    console.log(this.document.documentElement.classList);
  }
}
