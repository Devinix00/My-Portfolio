import { create } from "zustand";

interface IUseModalStore {
  isShowModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModalStore = create<IUseModalStore>((set) => ({
  isShowModal: false,
  openModal: () => set(() => ({ isShowModal: true })),
  closeModal: () => set(() => ({ isShowModal: false })),
}));

export default useModalStore;

