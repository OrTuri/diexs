const Card = ({ title, body, iconClass, bg }) => {
  return (
    <div
      className="d-flex justify-content-around p-4"
      style={{ backgroundColor: bg }}
    >
      <div className="me-3">
        <i
          className={iconClass}
          style={{
            fontSize: "100px",
            color: "#ef5130",
            minWidth: "100px",
          }}
        ></i>
      </div>
      <div className="text-start" style={{ maxWidth: "900px" }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
