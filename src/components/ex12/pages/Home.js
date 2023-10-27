import { PageTitle } from "../components/PageTitle";
import { Section01 } from "../components/Section01";
import { Section02 } from "../components/Section02";

export const Home = () => {
  return (
    <div>
      <PageTitle name={"Home"} />

      <Section01 />
      <Section02 />
    </div>
  );
};
