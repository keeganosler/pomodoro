import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { COLOR_CLASSES, FONT_CLASSES } from '../app.contants';
import { ColorsActions } from '../state/actions/color.actions';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private store: Store
  ) {}

  onUpdateColor(colorClassName: string) {
    this.store.dispatch(
      ColorsActions.changeColor({ newColor: colorClassName })
    );
    let intersection: string[] = this.classList.filter((c) =>
      COLOR_CLASSES.includes(c)
    );
    if (intersection.length) {
      this.document.documentElement.classList.remove(intersection[0]);
    }
    this.document.documentElement.classList.add(colorClassName);
  }

  onUpdateFont(fontClassName: string) {
    let intersection: string[] = this.classList.filter((c) =>
      FONT_CLASSES.includes(c)
    );
    if (intersection.length) {
      this.document.documentElement.classList.remove(intersection[0]);
    }
    this.document.documentElement.classList.add(fontClassName);
  }

  onUpdateLightMode(lightMode: boolean) {
    if (lightMode) {
      if (this.classList.includes('dark-mode')) {
        this.document.documentElement.classList.remove('dark-mode');
      }
      this.document.documentElement.classList.add('light-mode');
    } else {
      if (this.classList.includes('light-mode')) {
        this.document.documentElement.classList.remove('light-mode');
      }
      this.document.documentElement.classList.add('dark-mode');
    }
  }

  get classList(): string[] {
    return this.document.documentElement.classList.value.split(' ');
  }
}
