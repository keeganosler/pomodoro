import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getLightTheme = createFeatureSelector<string>('lightTheme');

export const returnLightTheme = createSelector(getLightTheme, (lightTheme) => {
  return lightTheme;
});
