const express = require("express");
const { connectToMongoDB } = require("./connect");
const path = require("path");
const urlRoute = require("./routes/url");
const renderRoute = require("./routes/srs_home");
const URL = require("./models/url");
const { log } = require("console");
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const PORT = 8001;

// middleware
app.use(express.json());

// database connections
connectToMongoDB(process.env.MONGO_URI).then(() =>
  console.log("Mongodb connected ")
);

// routes



app.use("/url", urlRoute);
app.use("/home",renderRoute);

app.get("/red/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    console.log("sort id is", shortId);
  
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      
        
      }
      
    );
    // const user =  await URL.findOne({shortId});
    //   console.log("found user", user.redirectURL);
    //   user.visitHistory.push({
    //     timestamp:Date.now()
    //   });

    // URL.save();
    // console.log(" updated entry is", entry);
    // // console.log("params id", req.params.shortId);
    // const orginalUrl = user.redirectURL;
    // console.log("orginal url",orginalUrl);
    res.redirect(entry.redirectURL);
  
  } catch (error) {
    console.log("eroor btao", error);
  }
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
