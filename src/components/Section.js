import data from "../data/data.json";

const Section = () => {
  return data.map((programme, index) => {
    return (
      <>
        <section className="row container">
          <div className="hour">{programme.time}</div>
          <div className="img">
            <img src={programme.image} alt="" />
          </div>
          <div className="detail column">
            <div className="detail__title">{programme.title}</div>
            <div className="detail__type">{programme.type}</div>
            <div className="detail__live row">
              <div className="detail__live__duration">{programme.duration}</div>{" "}
              <div className="detail__live__direct">
                {programme.direct && <span>Direct</span>}
                {programme.isUnseen && <span>Inédit</span>}
              </div>
            </div>
          </div>
        </section>
        <hr className="container" />
      </>
    );
  });
};

export default Section;
