import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  return (
    <div className="container">
      <h1>Home</h1>
      {posts.length < 1 ? (
        <h1>NO POSTS TO SHOW!</h1>
      ) : (
        <div className="row">
          {posts.map(({ title, id, body }) => {
            return (
              <div className="col s12 m6 offset-m3" key={id}>
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                  </div>
                  <div className="card-action">
                    <Link to={`/posts/${id}`}>Go inside</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
