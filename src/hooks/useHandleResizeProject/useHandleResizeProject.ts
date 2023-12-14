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
    const observer = new ResizeObserver((entries) => {
      if (window.innerWidth >= 992) {
        setIsResized(true);
      } else {
        setIsResized(false);
      }

      for (let entry of entries) {
        const parentWidth = entry.contentRect.width;
        const newWidth = parentWidth / 2;
        const newHeight = parentWidth / 2;

        if (childSize.width !== newWidth || childSize.height !== newHeight) {
          setChildSize({
            width: newWidth,
            height: newHeight,
          });
        }
      }
    });

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, [parentRef, childSize, setChildSize, setIsResized]);
}

export default useHandleResizeProject;
