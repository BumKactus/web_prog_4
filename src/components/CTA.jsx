import { ctaData } from "../mockData/ctaData";

export const Title = ({ title }) => (
  <p className="cta-text-1">{title}</p>
);

export const Description = ({ description }) => (
  <p className="cta-text-2">{description}</p>
);
export const ButtonText = ({ buttonText }) => (
  <button className="cta-start">{buttonText}</button>
);
const CTA = () => {

  const { title, description, buttonText } = ctaData;
  
  return (
    <section className="CTA">
      <div className="container">
        <div className="cta-background">
          <Title title={title} />
          <Description description={description} />
          <div className="btn-cta">
            <ButtonText buttonText={buttonText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

