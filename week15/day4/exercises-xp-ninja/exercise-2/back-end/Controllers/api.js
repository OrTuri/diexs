const getCustomers = (req, res) => {
  const data = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Doe" },
    { id: 3, firstName: "Ziv", lastName: "Chen" },
    { id: 4, firstName: "Isaac", lastName: "Groisman" },
    { id: 5, firstName: "Avner", lastName: "Maman" },
    { id: 6, firstName: "Megan", lastName: "Dreyfuss" },
  ];
  res.json(data);
};

module.exports = {
  getCustomers,
};
