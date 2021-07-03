const http = require("http");

const PORT = process.env.PORT || 3001;
const BASE_URL = `http://localhost:${PORT}`;

const app = http.createServer((req) => {
  const searchParams = new URL(req.url, BASE_URL).searchParams;
  if (
    searchParams.get("type") === "message" &&
    JSON.parse(searchParams.get("payload")).text === "ping"
  ) {
    console.log("pong");
  }
});

app.listen(PORT);
console.log(`Server running at ${BASE_URL}`);
