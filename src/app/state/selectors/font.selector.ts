import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getFont = createFeatureSelector<string>('font');

export const returnFont = createSelector(getFont, (font) => {
  return font;
});
