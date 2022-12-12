import servicesList from "../data/services";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Czym zajmuje się nasza firma?</h2>
        </div>
        <div className="offer-wrapper">
          {servicesList.map((item, index) => {
            return (
              <ServiceItem item={item} key={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
