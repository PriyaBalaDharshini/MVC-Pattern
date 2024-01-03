const express = require("express");
const app = express();

const userRouter = require("./routes/userRoute");
const loginRouter = require("./routes/loginRoute");

app.use("/", userRouter);
app.use("/login", loginRouter);

app.listen(8000, () => {
    console.log("App is listening");
});