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
    name: 'Jhon',
    avatar: 'https://i.imgur.com/LDOO4Qs.jpg',
  },
  setUser: (name, avatar) => set({ user: { name, avatar } }),
}));
