const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Render! 🚀 Your server is running.");
});

// Render 会提供 PORT 环境变量
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
