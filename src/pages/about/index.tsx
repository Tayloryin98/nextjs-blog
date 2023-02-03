import BaseLayout from "@/layouts/BaseLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const About: NextPageWithLayout = () => {
  return <></>;
};

About.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default About;
