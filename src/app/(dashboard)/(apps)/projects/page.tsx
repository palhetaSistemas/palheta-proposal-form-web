import { getProjects } from "@/src/config/project-config";
import ProjectsView from "./projects-view";
export default async function ProjectPage({ params }: { params: string }) {
  const projects = await getProjects();

  return (
    <div>
      <ProjectsView projects={projects} />
    </div>
  );
}
