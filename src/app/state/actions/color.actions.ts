import { createActionGroup, props } from '@ngrx/store';

export const ColorsActions = createActionGroup({
  source: 'Colors',
  events: {
    'Change Color': props<{ newColor: string }>(),
  },
});
