interface IProject {
  type: string;
  descriptionBracket: string;
  description: string;
  featuresBracket: stirng;
  features: string[];
  techStacksBracket: "Tech Stacks";
  techStacks: string[];
  githubBracket: string;
  githubLink: string;
  images?: string[];
}

interface IModalContents {
  title: string;
  circumstance: string;
  reason: string;
  process: string;
  blogLink: string;
}
