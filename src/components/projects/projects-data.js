import {
  Project1LargeImg,
  Project1SmallImg,
  Project2LargeImg,
  Project2SmallImg,
  Project3LargeImg,
  Project3SmallImg,
  Project4LargeImg,
  Project4SmallImg,
  Project5LargeImg,
  Project5SmallImg,
  Project6LargeImg,
  Project6SmallImg,
} from "./project-images";

export const projects = [
  {
    id: 1,
    projectName: "Design portfolio",
    languages: ["HTML", "CSS"],
    img: { small: Project1SmallImg, large: Project1LargeImg },
  },
  {
    id: 2,
    projectName: "E-learning landing page",
    languages: ["HTML", "CSS"],
    img: { small: Project2SmallImg, large: Project2LargeImg },
  },
  {
    id: 3,
    projectName: "Todo web app",
    languages: ["HTML", "CSS", "JavaScript"],
    img: { small: Project3SmallImg, large: Project3LargeImg },
  },
  {
    id: 4,
    projectName: "Entertainment web app",
    languages: ["HTML", "CSS", "JavaScript"],
    img: { small: Project4SmallImg, large: Project4LargeImg },
  },
  {
    id: 5,
    projectName: "Memory Game",
    languages: ["HTML", "CSS", "JavaScript"],
    img: { small: Project5SmallImg, large: Project5LargeImg },
  },
  {
    id: 6,
    projectName: "Art gallery showcase",
    languages: ["HTML", "CSS", "JavaScript"],
    img: { small: Project6SmallImg, large: Project6LargeImg },
  },
];
