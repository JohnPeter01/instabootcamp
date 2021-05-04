import { loginService, LOGIN_COOKIE_APP_TOKEN } from './loginService';

const token = 'fake-token';
async function httpClientModule() {
  return {
    data: {
      token,
    },
  };
}
async function httpClientModuleError() {
  return {
    data: {},
    err: {
      message: 'Failed to Login',
    },
  };
}
const setCookieModule = jest.fn();
describe('loginService', () => {
  describe('login()', () => {
    describe('when user try to login', () => {
      describe('and succeed', () => {
        test('store its token', async () => {
          const loginServiceResponse = await loginService.login({
            username: 'someusername',
            password: 'somepassword',
          },
          setCookieModule,
          httpClientModule);
          expect(setCookieModule).toHaveBeenCalledWith(null, LOGIN_COOKIE_APP_TOKEN, token, {
            path: '/',
            maxAge: 604800,
          });
          expect(loginServiceResponse).toEqual({ token });
        });
      });
      describe('and its fail', () => {
        test('store its token', async () => {
          await expect(loginService.login({
            username: 'someusername',
            password: 'somepassword',
          },
          setCookieModule,
          httpClientModuleError))
            .rejects
            .toThrow('Failed to Login');
        });
      });
    });
  });
  describe('logout()', () => {
    describe('when user try to logout and succeed', () => {
      test('remove its token', async () => {
        const destroyCookie = jest.fn();
        await loginService.logout(null, destroyCookie);
        expect(destroyCookie).toHaveBeenCalledWith(null, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
      });
    });
  });
});
