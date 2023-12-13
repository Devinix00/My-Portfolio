import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  isSmallWidth: boolean;
  setIsSmallWidth: Dispatch<SetStateAction<boolean>>;
}

function useHandleResizeInfoTitle({ isSmallWidth, setIsSmallWidth }: IProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 675) {
        setIsSmallWidth(() => true);
      } else {
        setIsSmallWidth(() => false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallWidth, setIsSmallWidth]);
}

export default useHandleResizeInfoTitle;
