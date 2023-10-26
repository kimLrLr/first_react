import { Helmet } from "react-helmet";

export const PageTitle = ({ name }) => {
  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
    </div>
  );
};
