import useModalStore from "../../stores/useModalStore/useModalStore";
import useModalTypeStore from "../../stores/useModalTypeStore/useModalTypeStore";

interface IReturn {
  openModalType: (type: string) => void;
}

function useOpenModalType(): IReturn {
  const { openModal } = useModalStore();
  const { setModalType } = useModalTypeStore();
  const openModalType = (type: string): void => {
    openModal();
    setModalType(type);
  };
  return { openModalType };
}

export default useOpenModalType;
