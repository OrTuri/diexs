import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/postsSlice";

const Post = (props) => {
  const { posts } = useSelector((state) => state.posts);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (posts.find((post) => post.id === postId)) {
    const { id, title, body } = posts.find((post) => post.id === postId);
    return (
      <div className="post">
        <h4 className="center">{title}</h4>
        <p>{body}</p>
        <div className="center">
          <button
            onClick={() => {
              dispatch(deletePost(id));
              navigate("/home", { replace: true });
            }}
            className="btn grey"
          >
            Delete Post
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>POST NOT FOUND!</h1>;
  }
};

export default Post;
