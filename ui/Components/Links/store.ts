import { create } from "zustand";

interface ISong {
  title: string;
  type: string;
  _id?: string;
  coverImage: string;
}

interface ILinkStore {
  song: any | null;
  setSignUpFormOpen: (isOpen: boolean) => void;
  signUpFormOpen: boolean;
}

export const useLinkStore = create<ILinkStore>((set) => ({
  song: null,
  setSignUpFormOpen: (isOpen: boolean) => set({ signUpFormOpen: isOpen }),
  signUpFormOpen: false,
}));
