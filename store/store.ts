import { create } from 'zustand';

export type User = {
  name: string;
  avatar: string;
};

export type State = {
  user: User;
};

export type Actions = {
  setUser: (name: string, avatar: string) => void;
};

export const useUserStore = create<State & Actions>()((set) => ({
  user: {
    name: '',
    avatar: '',
  },
  setUser: (name, avatar) => set({ user: { name, avatar } }),
}));
