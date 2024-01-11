import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";
import { FaGithub } from "react-icons/fa";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = ProjectList[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <FaGithub />
    </div>
  );
}

export default ProjectDisplay;
