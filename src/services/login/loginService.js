import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}
console.log('isStagingEnv', isStagingEnv);
const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

export const loginService = {
  async login({ username, password }, setCookieModule = setCookie, httpClientModule = HttpClient) {
    return httpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhasegura'
      },
    })
      .then((respostaConvertida) => {
        // Salvar o Token
        // Escrever os testes
        const { token } = respostaConvertida.data;
        const hasToken = token;
        if (!hasToken) {
          throw new Error('Failed to Login');
        }
        const DAY_IN_SECONDS = 86400;
        setCookieModule(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return { token };
      });
  },
  async logout(destroyCookieModule = destroyCookie) {
    destroyCookieModule(null, 'APP_TOKEN');
  },
};
