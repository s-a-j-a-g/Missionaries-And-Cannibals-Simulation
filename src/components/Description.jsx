const Description = () => {
  return (
    <div className="description">
      <div className="description-row">
        <div
          className="description-color"
          style={{ backgroundColor: "#FFB500" }}
        />
        <h5 className="description-text">Initial State</h5>
      </div>

      <div className="description-row">
        <div
          className="description-color"
          style={{ backgroundColor: "#0094FF" }}
        />
        <h5 className="description-text">Valid State</h5>
      </div>

      <div className="description-row">
        <div
          className="description-color"
          style={{ backgroundColor: "#a3a3a3" }}
        />
        <h5 className="description-text">Recursive State</h5>
      </div>

      <div className="description-row">
        <div
          className="description-color"
          style={{ backgroundColor: "#FF0000" }}
        />
        <h5 className="description-text">Dead State</h5>
      </div>

      <div className="description-row">
        <div
          className="description-color"
          style={{ backgroundColor: "green" }}
        />
        <h5 className="description-text">Final State</h5>
      </div>
    </div>
  );
};

export default Description;
