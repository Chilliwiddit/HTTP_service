import app from './app.mjs';  // Import the app from app.mjs

const port = 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
