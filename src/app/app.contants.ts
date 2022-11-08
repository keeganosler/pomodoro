export const COLORS: { value: string; className: string }[] = [
  { value: 'red', className: 'color-red' },
  { value: 'green', className: 'color-green' },
  { value: 'purple', className: 'color-purple' },
];

export const FONTS: { value: string; className: string }[] = [
  { value: 'roboto', className: 'font-roboto' },
  { value: 'arial', className: 'font-arial' },
  { value: 'helv', className: 'font-helv' },
];

export const TIMES: { type: string; defaultTime: number }[] = [
  { type: 'pomodoro', defaultTime: 1500 },
  { type: 'shortBreak', defaultTime: 300 },
  { type: 'longBreak', defaultTime: 900 },
];

export const COLOR_CLASSES: string[] = COLORS.map((c) => {
  return c.className;
});

export const FONT_CLASSES: string[] = FONTS.map((c) => {
  return c.className;
});
