import useModalStore from "../../stores/useModalStore/useModalStore";

interface IProps {
  setIsClosing: any;
}

interface IReturn {
  closeWithDelay: () => void;
}

function useCloseWithDelay({ setIsClosing }: IProps): IReturn {
  const { closeModal } = useModalStore();
  const closeWithDelay = (): void => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 200);
  };
  return { closeWithDelay };
}

export default useCloseWithDelay;
