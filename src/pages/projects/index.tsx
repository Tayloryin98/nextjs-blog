import { ProjectInl } from "@/components/ProjectGallary";
import BaseContainer from "@/layouts/BaseContainer";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPageWithLayout } from "../_app";


const projectList:Array<ProjectInl>=[
    
]

const ProjectPage: NextPageWithLayout = () => {
  return (
    <BaseContainer>
      <header className="max-w-2xl">
        <h1 className="trancking-tight text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            
        </ul>
      </div>
    </BaseContainer>
  );
};

ProjectPage.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ProjectPage