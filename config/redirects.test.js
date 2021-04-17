import redirects from './redirects';

describe('', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
