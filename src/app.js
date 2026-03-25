import express from "express";
import cors from "cors";
import router from './routes/generator.js'

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/', router);

export default app;