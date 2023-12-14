import { create } from "zustand";

interface IUseModalTypeStore {
  modalType: string;
  setModalType: (newModalType: string) => void;
}

const useModalTypeStore = create<IUseModalTypeStore>((set) => ({
  modalType: "",
  setModalType: (newModalType: string) =>
    set(() => ({
      modalType: newModalType,
    })),
}));

export default useModalTypeStore;
