import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

process.on("SIGNIN", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
