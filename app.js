import express from "express";

const app = express();

app.get("/hello", (_, res) => {
  return res.json(""Hello world");
});

export default app;
