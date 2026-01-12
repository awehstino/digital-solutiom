import PageBanner from "@/components/Common/PageBanner";
import ProjectsLists from "@/components/Projects/ProjectsLists";

export default function Projects() {
  return (
    <>
      <PageBanner pageTitle="Projects" />

      <ProjectsLists />
    </>
  );
}
