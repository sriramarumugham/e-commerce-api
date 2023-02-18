const Product = require("../models/product");

module.exports.create = async function (req, res) {
  try {
    console.log(req.query.name, req.query.quantity);
    Product.create(
      {
        name: req.query.name,
        quantity: req.query.quantity,
        id: req.query.id,
      },
      function (err, x) {
        if (!err) {
          let product = {};
          product.name = x.name;
          product.quantity = x.quantity;
          let data = {};
          data.product = product;
          return res.json({ data: data });
        }
      }
    );
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.fetchAll = async function (req, res) {
  try {
    let product = await Product.find({});
    let data = {};
    data.products = [];

    for (let i = 0; i < product.length; i++) {
      let temp = {};
      temp.name = product[i].name;
      temp.quantity = product[i].quantity;
      temp.id = product[i]._id;
      let products = data.products;
      products.push(temp);
      data.products = products;
    }

    return res.json({ data: data });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.fetchOne = async function (req, res) {
  try {
    let product = await Product.find(req.body.id);
    let data = {};
    data.products = [];

    let temp = {};
    temp.name = product.name;
    temp.quantity = product.quantity;
    temp.id = product._id;
    let products = data.products;
    products.push(temp);
    data.products = products;

    return res.json({ data: data });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.update = async function (req, res) {
  try {
    let searchid = parseInt(req.params.id);
    console.log(searchid);
    console.log(req.body);
    let result = await Product.findOneAndUpdate(
      { id: searchid },
      {
        name: req.body.name,
        quantity: req.body.quantity,
      }
    );
    let data = {};
    let product = {};

    product.id = result.id;
    product.name = result.name;
    product.quantity = result.quantity;
    data.product = product;

    return res.status(200).json({ data: data });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.destroy = async function (req, res) {
  try {
    let product = await Product.findOneAndDelete(req.body.id);
    return res.json({ message: "Product deleted" });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
