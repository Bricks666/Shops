import { createContext } from 'react';
import { AuthContext } from './types';

export const authContent = createContext<AuthContext | null>(null);
