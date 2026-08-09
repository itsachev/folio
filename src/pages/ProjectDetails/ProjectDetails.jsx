import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <section>
      <h1>Project: {projectId}</h1>
    </section>
  );
}

export default ProjectDetails;
