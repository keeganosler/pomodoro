import { createReducer, on } from '@ngrx/store';
import { LightThemesActions } from '../actions/light-theme.actions';

export const initialState: string = 'light-mode';

export const lightThemeReducer = createReducer(
  initialState,
  on(
    LightThemesActions.changeLightTheme,
    (_state, { newLightTheme }) => newLightTheme
  )
);
