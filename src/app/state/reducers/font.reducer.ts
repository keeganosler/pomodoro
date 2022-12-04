import { createReducer, on } from '@ngrx/store';
import { FontsActions } from '../actions/font.actions';

export const initialState: string = 'font-roboto';

export const fontReducer = createReducer(
  initialState,
  on(FontsActions.changeFont, (_state, { newFont }) => newFont)
);
