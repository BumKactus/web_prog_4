import { myAppsData } from "../mockData/myAppsData";

export const EarlyAccess = ({ earlyAccess}) => (
  <p className="my-apps-text-1">{earlyAccess}</p>
);

export const Title = ({ title }) => (
  <p className="my-apps-title">{title}</p>
);
export const Description = ({ description }) => (
  <p className="my-apps-text-1">{description}</p>
);
export const EarlyAccessBottom = ({ earlyAccessBottom }) => (
  <p className="my-apps-desc">{earlyAccessBottom}</p>
);

const Illustration = ({ illustration: { alt, src } }) => (
  <img src={src} alt={alt} />
);

const MyApps = () => {
  const { imageF, earlyAccess, title, description, earlyAccessBottom } = myAppsData;

  return (
    <section className="my-apps section">
      <div className="container">
        <div className="my-apps-image">
          <Illustration illustration={imageF} />
        </div>
        <div className="my-apps-wrapper">
          <EarlyAccess earlyAccess={earlyAccess} />
          <Title title={title} />
          <Description description={description} />
          <EarlyAccessBottom earlyAccessBottom={earlyAccessBottom} />
        </div>
      </div>
    </section>
  );
};

export default MyApps;