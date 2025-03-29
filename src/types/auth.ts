export interface User {
  name: string;
  email: string;
  role: 'Admin' | 'SuperAdmin';
  companyName?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}