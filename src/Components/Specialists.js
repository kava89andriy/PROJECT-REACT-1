import specialistList from "../Data/specialists";

const Specialists = () => {
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
