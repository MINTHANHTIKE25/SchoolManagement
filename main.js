import express from "express";
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  // Use response.send() to send the string to the client
  // response.send('Hello World!');
  return "Hello World!";
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
