import ProjectGallary, { ProjectInl } from "@/components/ProjectGallary";
import BaseContainer from "@/layouts/BaseContainer";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPageWithLayout } from "../_app";
import Planetaria from "public/projectGallary/planetaria.svg";
import Animaginary from "public/projectGallary/animaginary.svg";
import Cosmos from "public/projectGallary/cosmos.svg";
import HelioStream from "public/projectGallary/helio-stream.svg";
import OpenShuttle from "public/projectGallary/open-shuttle.svg";
import PageHeader from "@/components/PageHeader";

const projectList: Array<ProjectInl> = [
  {
    _id: "1",
    img: <Planetaria className="h-8 w-8 flex-none"></Planetaria>,
    name: "Planetaria",
    summary:
      "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://www.baidu.com",
  },
  {
    _id: "2",
    img: <Animaginary className="h-8 w-8 flex-none"></Animaginary>,
    name: "Animaginary",
    summary:
      "High performance web animation library, hand-written in optimized WASM.",
    url: "https://www.baidu.com",
  },
  {
    _id: "3",
    img: <HelioStream className="h-8 w-8 flex-none"></HelioStream>,
    name: "HelioStream",
    summary:
      "Real-time video streaming library, optimized for interstellar transmission.",
    url: "https://www.baidu.com",
  },
  {
    _id: "4",
    img: <Cosmos className="h-8 w-8 flex-none"></Cosmos>,
    name: "cosmOS",
    summary: "The operating system that powers our Planetaria space shuttles.",
    url: "https://www.baidu.com",
  },
  {
    _id: "5",
    img: <OpenShuttle className="h-8 w-8 flex-none"></OpenShuttle>,
    name: "OpenShuttle",
    summary:
      "The schematics for the first rocket I designed that successfully made it to orbit.",
    url: "https://www.baidu.com",
  },
];

const pageHeader = {
  title: "Things I’ve made trying to put my dent in the universe.",
  summary:
    "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
  maxWidth: true,
};

const ProjectPage: NextPageWithLayout = () => {
  return (
    <BaseContainer>
      <PageHeader header={pageHeader}></PageHeader>
      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectList.map((item) => {
            return (
              <li key={`project-${item._id}`}>
                <ProjectGallary project={item}></ProjectGallary>
              </li>
            );
          })}
        </ul>
      </div>
    </BaseContainer>
  );
};

ProjectPage.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ProjectPage;
