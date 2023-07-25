import { useEffect, useState } from "react";
import { projectDataCategory, projectsData } from "./Data";
import WorkItem from "./WorkItem";

const Works = () => {
  const [project, setProject] = useState([]);
  const [item, setItem] = useState({ title: "All" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.title === "All") {
      setProject(projectsData);
    }else {
      const newProjectsData = projectsData.filter((project) => {
        return project.category === item.title;
      });
      setProject(newProjectsData);
    }
  }, [item]);

  function handleClick(e, index) {
    setItem({ title: e.target.textContent });
    setActive(index);
  }

  return (
    <>
      <div className="project__filter">
        {projectDataCategory.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-category" : "category"}`}
              key={index}
            >
              {item.title}
            </span>
          );
        })}
      </div>
      <div className="project__container container grid">
        {project.map((item, index) => (
          <WorkItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Works;
