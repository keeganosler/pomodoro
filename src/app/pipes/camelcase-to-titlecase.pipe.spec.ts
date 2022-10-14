import { CamelcaseToTitlecasePipe } from './camelcase-to-titlecase.pipe';

describe('CamelcaseToTitlecasePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelcaseToTitlecasePipe();
    expect(pipe).toBeTruthy();
  });
});
