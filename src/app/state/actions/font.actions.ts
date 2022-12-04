import { createActionGroup, props } from '@ngrx/store';

export const FontsActions = createActionGroup({
  source: 'Fonts',
  events: {
    'Change Font': props<{ newFont: string }>(),
  },
});
