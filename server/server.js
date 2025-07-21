import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { connectDB } from './lib/db.js';

const app = express();
const server = http.createServer(app);

// middlewares
app.use(express.json({limit: '50mb'}));
app.use(cors());

app.use("api/status", (req, res) => {
  res.send("Server is live")
});

await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});