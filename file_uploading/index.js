const express = require("express");
const path = require("path");
const multer = require("multer");
const { log } = require("console");
// const upload = multer({ dest: 'uploads/' })

const app = express();

// for server side rendering
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("form");
});

// upload instance act like a middleware
// app.post('/upload', upload.single("profileImage"), (req, res)=>{
//     console.log(req.body);
//     console.log(req.file);

//     // res.redirect('/');
// })


// =================== control of file storage ==============

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.body);
  console.log("file", req.file);
  res.redirect("/");
});

const port = 2000;
app.listen(port, () => {
  console.log("server is runnig at ", port);
});
