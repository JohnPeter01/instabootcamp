import { useEffect, useState } from 'react';
import { postService } from './postService';

export const useUserService = {
  getProfilePage() {
    const [response, setResponse] = useState({
      data: null,
      loading: true,
      error: null,
    });

    useEffect((post) => {
      postService.post(post).then((respostaDoServidor) => {
        setResponse((currentState) => ({
          ...currentState,
          data: respostaDoServidor,
          loading: false,
          error: null,
        }));
      })
        .catch((err) => {
          setResponse((currentState) => ({
            ...currentState,
            data: null,
            loading: false,
            error: err.message,
          }));
        });
    }, []);

    return response;
  },
};
