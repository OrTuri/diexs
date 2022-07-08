const CardsContainer = (props) => {
  return (
    <div
      style={{
        width: "95%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "30px",
        margin: "40px auto",
        transition: "all 0.5s",
        position: "relative",
      }}
    >
      {props.children}
    </div>
  );
};

export default CardsContainer;
