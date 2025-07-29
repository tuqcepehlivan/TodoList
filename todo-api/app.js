

const express = require("express");

const app= express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API çalışıyor");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Sunucu ${PORT} portunda çalışıyor.');
});

const userRouter = require("./routes/user");
app.use("/users", usersRouter);

const todoRouter = require("./routes/todos");
app.use("/todo", todoRouter);

const commentRouter = require(".routes/comment");
app.use("comment", commentRouter);

const categoryRouter = require("./routes/category");
app.use("/category", categoryRouter);

const tagRouter = require("./routes/tag");
app.use("/tag", tagRouter);
