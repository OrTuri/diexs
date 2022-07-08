const getHello = (req, res) => {
  res.json({ msg: "Hello From Express!" });
};

const postHello = (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send(
    `I have received your message. this is what you sent me: "${req.body}"`
  );
  console.log(req.body);
};

module.exports = {
  getHello,
  postHello,
};
