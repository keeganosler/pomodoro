import { createActionGroup, props } from '@ngrx/store';

export const LightThemesActions = createActionGroup({
  source: 'Light Themes',
  events: {
    'Change Light Theme': props<{ newLightTheme: string }>(),
  },
});
