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
        setIsResized(true);
      } else {
        setIsResized(false);
      }
      if (parentRef.current) {
        const parentWidth = parentRef.current.offsetWidth;
        const newWidth = parentWidth / 2;
        const newHeight = parentWidth / 2;
        if (childSize.width !== newWidth || childSize.height !== newHeight) {
          setChildSize({
            width: newWidth,
            height: newHeight,
          });
        }
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [parentRef, setIsResized]); 
}

export default useHandleResizeProject;
