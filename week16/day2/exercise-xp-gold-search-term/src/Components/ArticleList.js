import Input from "./Input";
import { connect } from "react-redux";

const ArticleList = (props) => {
  return (
    <div
      style={{
        height: "600px",
        overflow: "auto",
        width: "fit-content",
        margin: "auto",
      }}
    >
      <h1>Search Articles</h1>
      <Input />
      <ul>
        {props.articles.map((article) => {
          return (
            <li key={article.id}>
              <a href={article.url} target="__blank">
                <p>{article.title}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.updatedArticles,
  };
};

export default connect(mapStateToProps)(ArticleList);
