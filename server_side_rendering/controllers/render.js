const URL = require("../models/url")

const handelRenderController = async(req, res)=>{

const urls = await URL.find({});
 console.log("all urls", urls);
return res.render("home",{
    url: urls
});
  
}

module.exports = {
    handelRenderController,
} 

