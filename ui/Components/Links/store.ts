import { create } from "zustand";

interface ISong {
  title: string;
  type: string;
  _id?: string;
  coverImage: string;
}

interface ILinkStore {
  song: any;
}

export const useLinkStore = create<ILinkStore>((set) => ({
  song: null,
}));
