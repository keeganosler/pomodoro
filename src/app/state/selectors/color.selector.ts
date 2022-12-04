import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getColor = createFeatureSelector<string>('color');

export const returnColor = createSelector(getColor, (color) => {
  return color;
});
