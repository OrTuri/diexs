const filterReducer = (state, action) => {
  if (action.type === "FILTER") {
    const updatedArticles = state.allArticles.filter((article) => {
      return article.title.toLowerCase().includes(action.payload.toLowerCase());
    });
    return { ...state, updatedArticles };
  }
  return { allArticles: state.articles, updatedArticles: state.articles };
};

export default filterReducer;
