import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  isMenuClicked: boolean | null;
  setIsMenuClicked: Dispatch<SetStateAction<boolean | null>>;
}

function useHandleHeaderResize({ isMenuClicked, setIsMenuClicked }: IProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuClicked((_prevState) => null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuClicked, setIsMenuClicked]);
}

export default useHandleHeaderResize;
