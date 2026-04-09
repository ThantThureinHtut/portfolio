
import { cacheLife, cacheTag } from "next/cache";

import ProjectGrid from "./ProjectGrid";
import { getProjects } from "@/lib/db/data";

export default async function ProjectSection() {
  "use cache";
  cacheTag("projects");
  cacheLife("hours");

  const projects = await getProjects();
  return (
    <div>
      <ProjectGrid projects={projects} />
    </div>
  );
}
