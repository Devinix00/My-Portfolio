import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface IProps {
  parentRef: RefObject<HTMLDivElement>;
  childSize: React.CSSProperties;
  setChildSize: Dispatch<SetStateAction<{ width: number; height: number }>>;
  setIsResized: Dispatch<SetStateAction<boolean>>;
}

function useHandleResizeProject({
  parentRef,
  childSize,
  setChildSize,
  setIsResized,
}: IProps) {
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 992) {
        setIsResized(() => true);
      } else {
        setIsResized(() => false);
      }
      if (parentRef.current) {
        const parentWidth = parentRef.current.offsetWidth;
        setChildSize(() => ({
          width: parentWidth / 2,
          height: parentWidth / 2,
        }));
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [childSize]);
}

export default useHandleResizeProject;
