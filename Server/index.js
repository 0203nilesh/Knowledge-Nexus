require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const app = express();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, (error) => {
  if (error) console.log(error);
  else console.log("Connected to MongoDB Database");
});

const port = 5000;

const users = [{}];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

const server = http.createServer(app);

const routes = require("./routes/routes.js");
app.use("/", routes);

const authRoute = require("./routes/auth.js");
app.use("/auth", authRoute);
// --------------------------------------Socket---------------------------------
const io = socketIO(server);
io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined `);

    //Jisne Join kia usko chhor k sbke pass jayega message.
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: ` ${users[socket.id]} has joined the chat`,
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `Welcome to the chat, ${users[socket.id]} `,
    });
  });

  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id });
    //  Rather than socket pura io hi bhej do
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", {
      user: "Admin",
      message: `${users[socket.id]}  has left`,
    });
    console.log(`user left`);
  });
});

app.get("/test/get", (req, res)=>{
  console.log(req.body);
  res.json({message: "All good"});
})

app.post("/test/post", (req, res)=>{
  console.log(req.body);
   const postData={title: "First name", message: "new message"};
   res.json(postData);
})

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
