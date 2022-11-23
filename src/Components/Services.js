import React from "react";

const Services = () => {
  const servicesList = [
    {
      name: "Usługa 1",
      info: "nowość",
    },
    {
      name: "Usługa 2",
      info: "",
    },
    {
      name: "Usługa 3",
      info: "",
    },
    {
      name: "Usługa 4",
      info: "",
    },
    {
      name: "Usługa 5",
      info: "",
    },
    {
      name: "Usługa 6",
      info: "",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Czym zajmuje się nasza firma?</h2>
        </div>
        <div className="offer-wrapper">
          {servicesList.map((item, index) => {
            return <div className="offer-item">
              <h3>{item.name}</h3>
              <span>{item.info}</span>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
