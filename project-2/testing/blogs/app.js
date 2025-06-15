import express from "express";
import mongoose from "mongoose";
import BlogModel from "./modules/blog_model.js";

//* Express App
const app = express();

//* Connect to MongoDB
const uri =
  "mongodb+srv://ishaqdahman:admin@cluster0.ql8k5oq.mongodb.net/blogs";

try {
  await mongoose.connect(uri);
  console.log("MongoDB connected");
} catch (err) {
  console.error("MongoDB connection error:", err);
}

//* view engine
app.set("view engine", "ejs");
app.set("views", `ejs_pages`);

//* Listen
app.listen(4000, () => {
  console.log("App Listen on Port 4000");
});

//* Make files public like (style.css)
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));



//* test mongoDB
app.get("/add-blog", (req, res) => {
  const blog = new BlogModel({
    title: "Title",
    subTitle: "SubTitle",
    body: "Body",
  });

  blog
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


//* All Blogs
app.get("/", (req, res) => {
  BlogModel.find().sort({createdAt: -1})
    .then((data) => {
      res.render("index", { title: "Home", blogs: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

//* About
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
//* Redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//* Create Blog
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//* 404 page
app.use((req, res) => {
  res.render("404", { title: "Page Not Found" });
});
