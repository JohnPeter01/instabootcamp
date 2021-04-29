const { propToStyle } = require('.');

describe('propToStyle()', () => {
  describe('when recives an simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');
      const component = { textAlign: 'center' };
      const styledResult = propToStyleResult(component);

      expect(styledResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');
      const component = { flex: 1 };
      const styledResult = propToStyleResult(component);
      expect(styledResult).toEqual({ flex: 1 });
    });
  });
  describe('renders only one breakpoint resolution', () => {
    test('renders only the recived ones', () => {
      const propToStyleResult = propToStyle('textAlign');
      const component = { textAlign: { xs: 'center' } };
      const styledResult = propToStyleResult(component);

      expect(styledResult).toMatchSnapshot();
    });
    test('renders two or more breakpoints resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      const component = { textAlign: { xs: 'center', md: 'right' } };
      const styledResult = propToStyleResult(component);

      expect(styledResult).toMatchSnapshot();
    });
  });
});
