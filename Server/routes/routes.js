const express = require("express");
const router = express.Router();

const Articles = require("../models/articles.js");
const Books = require("../models/books.js");
const Videos = require("../models/videos.js");

//------Articles-----------------------------------------------------------------
router.post("/articles/post", async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Articles({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
      category: req.body.category,
      Author: req.body.Author,
      year: req.body.year,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/articles/get", async (req, res) => {
  try {
    let data = await Articles.find();
    data = data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;

      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
        Author: info.Author,
        year: info.year,
      };
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/articles/get/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let info = await Articles.findById(req.params.id);

    const src = `data:image/png;base64,${Buffer.from(info.image.data).toString(
      "base64"
    )}`;
    let value = {
      id: info._id,
      src,
      name: info.name,
      details: info.details,
      category: info.category,
      Author: info.Author,
      year: info.year,
    };

    res.json(value);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Patch
router.patch("/articles/update/:id", async (req, res) => {
  try {
    const user = await Articles.findById(req.params.id);

    if (req.body.image) {
      const file = req.files.image.data;
      const { password, ...others } = req.body;
      //   console.log(others);
      const updatedData = others;
      const id = req.params.id;

      const options = { new: true };
      const result = await Articles.findByIdAndUpdate(
        id,
        { ...updatedData, image: file },
        options
      );
      res.send(result);
    } else {
      const { password, ...others } = req.body;

      const updatedData = others;
      const id = req.params.id;
      const options = { new: true };
      const result = await Articles.findByIdAndUpdate(id, updatedData, options);
      res.send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//--------------------------Books------------------------------------------------

router.post("/books/post", async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Books({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
      category: req.body.category,
      Author: req.body.Author,
      year: req.body.year,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/books/get", async (req, res) => {
  try {
    let data = await Books.find();
    data = data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;

      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
        Author: info.Author,
        year: info.year,
      };
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/books/get/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let info = await Books.findById(req.params.id);

    const src = `data:image/png;base64,${Buffer.from(info.image.data).toString(
      "base64"
    )}`;
    let value = {
      id: info._id,
      src,
      name: info.name,
      details: info.details,
      category: info.category,
      Author: info.Author,
      year: info.year,
    };

    res.json(value);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Patch
router.patch("/books/update/:id", async (req, res) => {
  try {
    const user = await Books.findById(req.params.id);

    if (req.body.image) {
      const file = req.files.image.data;
      const { password, ...others } = req.body;
      //   console.log(others);
      const updatedData = others;
      const id = req.params.id;

      const options = { new: true };
      const result = await Books.findByIdAndUpdate(
        id,
        { ...updatedData, image: file },
        options
      );
      res.send(result);
    } else {
      const { password, ...others } = req.body;

      const updatedData = others;
      const id = req.params.id;
      const options = { new: true };
      const result = await Articles.findByIdAndUpdate(id, updatedData, options);
      res.send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// -------------------------------videos---------------------------------------

router.post("/videos/post", async (req, res) => {
  try {
    const data = new Videos({
      name: req.body.name,
      url: req.body.url,
      details: req.body.details,
      category: req.body.category,
      posted: req.body.posted,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/videos/get", async (req, res) => {
  try {
    let data = await Videos.find();
    data = data.map((info) => {
      return {
        id: info._id,
        url: info.url,
        name: info.name,
        details: info.details,
        category: info.category,
        posted: info.posted,
      };
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/videos/get/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let info = await Videos.findById(req.params.id);
    res.json(info);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Patch
router.patch("/videos/update/:id", async (req, res) => {
  try {
    const result = await Videos.findByIdAndUpdate(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

//First Name
// Last Name
// Email -->
// Password --> string , true
//Interest -- > Array
