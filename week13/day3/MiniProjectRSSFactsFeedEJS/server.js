const express = require("express");
let Parser = require("rss-parser");
let parser = new Parser();
const app = express();

const {
  getCategories,
  getPostsByCategory,
  getPostsByTitle,
} = require("./serverModules");

app.listen(3000);

const getPosts = async () => {
  const feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  return feed;
};

getPosts();

app.set("view engine", "ejs");
app.set("views", __dirname + "/public/pages");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/", async (req, res) => {
  try {
    const posts = await getPosts();
    console.log(posts["items"][0].categories);
    res.render("index", { posts: posts["items"] });
  } catch (err) {
    console.log(err);
  }
});

app.get("/search", async (req, res) => {
  try {
    const rssFeedArray = await getPosts();
    const categories = getCategories(rssFeedArray["items"]);
    res.render("search", { categories });
  } catch (err) {
    console.log(err);
  }
});

app.post("/search/category", async (req, res) => {
  const posts = await getPosts();
  const categories = getCategories(posts["items"]);
  const categorySelected = req.body.categorySelect;
  const filteredPosts = getPostsByCategory(posts["items"], categorySelected);
  res.render("search", { filteredPosts, categories });
});

app.post("/search/title", async (req, res) => {
  const posts = await getPosts();
  const keyword = req.body.searchKeyword;
  const categories = getCategories(posts["items"]);
  const filteredPosts = getPostsByTitle(posts["items"], keyword);
  res.render("search", { filteredPosts, categories });
});
