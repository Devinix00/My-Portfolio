import { Dispatch, MouseEventHandler, SetStateAction } from "react";

interface IProps {
  isMenuClicked: boolean | null;
  setIsMenuClicked: Dispatch<SetStateAction<boolean | null>>;
}

interface IReturn {
  isMenuClicked: boolean | null;
  handleClickMenu: () => void;
  handleCloseMenu: MouseEventHandler<HTMLAnchorElement>;
}

function useShowMenu({ isMenuClicked, setIsMenuClicked }: IProps): IReturn {
  const handleClickMenu = (): void => {
    setIsMenuClicked(() => !isMenuClicked);
  };

  const handleCloseMenu = (): void => {
    if (window.innerWidth <= 993) {
      setIsMenuClicked(() => false);
    }
  };
  return { isMenuClicked, handleClickMenu, handleCloseMenu };
}

export default useShowMenu;
