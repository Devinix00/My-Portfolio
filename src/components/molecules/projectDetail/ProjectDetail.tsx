import ProblemsSolvedLink from "../../problemsSolvedLink/ProblemsSolvedLink";
import ProjectDetailDescriptionContainer from "../projectDetailDescriptionContainer/ProjectDetailDescriptionContainer";
import ProjectDetailListsContainer from "../projectDetailListsContainer/ProjectDetailListsContainer";
import ProjectGithubContainer from "../projectGithubContainer/ProjectGithubContainer";

import styles from "./ProjectDetail.module.scss";

function ProjectDetail({
  type,
  descriptionBracket,
  featuresBracket,
  description,
  features,
  techStacksBracket,
  techStacks,
  githubBracket,
  githubLink,
}: IProject): JSX.Element {
  return (
    <div className={styles.container}>
      <ProjectDetailDescriptionContainer
        bracket={descriptionBracket}
        description={description}
      />
      <ProjectDetailListsContainer bracket={featuresBracket} lists={features} />
      <ProjectDetailListsContainer
        bracket={techStacksBracket}
        lists={techStacks}
      />
      <ProjectGithubContainer bracket={githubBracket} githubLink={githubLink} />
      <ProblemsSolvedLink type={type} />
    </div>
  );
}

export default ProjectDetail;
