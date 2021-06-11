import { createContext } from 'react';
import { authService } from '../../../../services/auth/authService';

export const AuthContext = createContext({
  hasActiveSession: authService(null).hasActiveSession(),
  user: {},
  posts: [],
  setPosts: () => {},
});
