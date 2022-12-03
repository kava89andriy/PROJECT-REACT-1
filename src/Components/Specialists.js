import specialist1 from "../assets/specialist1.png";
import specialist2 from "../assets/specialist2.png";

const Specialists = () => {
  const specialistList = [
    {
      name: "Imię Nazwisko",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel",
      photo: specialist1,
    },
    {
      name: "Imię Nazwisko 2",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel",
      photo: specialist2,
    },
  ];
  return (
    <section className="specialists" id="specialists">
      <div className="container">
        <h2>Nasi specjaliści</h2>
        {specialistList.map((item, index) => {
          return (
            <div key={index} className="specialist-item">
              <img
                className="specialist-photo"
                src={item.photo}
                alt="specialist"
              />
              <div className="specialist-info">
                <h3 className="name">{item.name} </h3>
                <p className="about">{item.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Specialists;
