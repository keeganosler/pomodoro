import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { COLOR_CLASSES, FONT_CLASSES } from '../app.contants';
import { ColorsActions } from '../state/actions/color.actions';
import { FontsActions } from '../state/actions/font.actions';
import { LightThemesActions } from '../state/actions/light-theme.actions';

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
    this.updateClassList(colorClassName, COLOR_CLASSES);
  }

  onUpdateFont(fontClassName: string) {
    this.store.dispatch(FontsActions.changeFont({ newFont: fontClassName }));
    this.updateClassList(fontClassName, FONT_CLASSES);
  }

  onUpdateLightMode(lightMode: boolean) {
    this.store.dispatch(
      LightThemesActions.changeLightTheme({
        newLightTheme: lightMode ? 'light-mode' : 'dark-mode',
      })
    );
    this.updateClassList(lightMode ? 'light-mode' : 'dark-mode', [
      lightMode ? 'dark-mode' : 'light-mode',
    ]);
  }

  updateClassList(newClassName: string, referenceClassList: string[]) {
    let intersection: string[] = this.classList.filter((c) =>
      referenceClassList.includes(c)
    );
    if (intersection.length) {
      this.document.documentElement.classList.remove(intersection[0]);
    }
    this.document.documentElement.classList.add(newClassName);
  }

  get classList(): string[] {
    return this.document.documentElement.classList.value.split(' ');
  }
}
