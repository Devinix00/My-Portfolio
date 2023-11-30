import { Dispatch, SetStateAction } from "react";

interface IProps {
  isMenuClicked: boolean | null;
  setIsMenuClicked: Dispatch<SetStateAction<boolean | null>>;
}

interface IReturn {
  isMenuClicked: boolean | null;
  handleClickMenu: () => void;
}

function useShowMenu({ isMenuClicked, setIsMenuClicked }: IProps): IReturn {
  const handleClickMenu = (): void => {
    setIsMenuClicked(() => !isMenuClicked);
  };
  return { isMenuClicked, handleClickMenu };
}

export default useShowMenu;
