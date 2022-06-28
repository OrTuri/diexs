const BootstrapCard = ({ celebrities }) => {
  return celebrities.map((celebrity, index) => {
    return (
      <div className="card my-5 m-auto" style={{ width: "20rem" }} key={index}>
        <img className="card-img-top" src={celebrity.imageUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{celebrity.title}</h5>
          <p className="card-text">{celebrity.description}</p>
          <a
            href={celebrity.buttonUrl}
            className="btn btn-primary"
            target={"__blank"}
          >
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};

export default BootstrapCard;
