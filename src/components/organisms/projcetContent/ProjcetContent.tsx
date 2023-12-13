import { useRef, useState } from "react";
import ProjectDetail from "../../molecules/projectDetail/ProjectDetail";
import ProjectImages from "../../molecules/projectImages/ProjectImages";
import styles from "./ProjcetContent.module.scss";
import useHandleResizeProject from "../../../hooks/useHandleResizeProject/useHandleResizeProject";

function ProjcetContent({ ...project }: IProject): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null);
  const [childSize, setChildSize] = useState({ width: 0, height: 0 });
  const [isResized, setIsResized] = useState(false);
  useHandleResizeProject({ parentRef, childSize, setChildSize, setIsResized });

  return (
    <div ref={parentRef} className={styles.container}>
      <ProjectImages
        style={
          isResized
            ? {
                width: childSize.width,
                height: childSize.height,
                transition: "none",
              }
            : { transition: "none" }
        }
      />
      <ProjectDetail {...project} />
    </div>
  );
}

export default ProjcetContent;
