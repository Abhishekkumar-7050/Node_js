const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();


const PORT = 3000;

app.get("/api/user", (req, res) => {
    console.log(req.params);
  res.json(users);
});

app.route("/api/user/:id").get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>
        user.id === id

    )
    return res.send(user)
}).post((req, res)=>{
    return res.send("post status is pending");
})

// to maintain the hybrid server
app.get("/user", (req, res) => {

  const htmll = `
   <ul>
${users.map((user) => `<li>${user.first_name}  </li>`)}

   </ul>

    `;
    res.send(htmll);
});

 

app.listen(PORT, (req, res) => {
  console.log(`server is running ${PORT}`);
});
