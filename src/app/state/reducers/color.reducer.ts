import { createReducer, on } from '@ngrx/store';
import { ColorsActions } from '../actions/color.actions';

export const initialState: string = 'color-green';

export const colorReducer = createReducer(
  initialState,
  on(ColorsActions.changeColor, (_state, { newColor }) => newColor)
);
