import express from "express";
import keys from "./keys";
import { createConnection, Connection } from "typeorm";
import router from './router'

// Express App Setup
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(5000, async (err) => {
  console.log("Listening");
  const connection = await createConnection({
    type: "postgres",
    host: keys.pgHost,
    port: keys.pgPort,
    username: keys.pgUser,
    password: keys.pgPassword,
    database: keys.pgDatabase,
    entities: ["src/Entities/*.ts"],
    synchronize: true
  }).catch((err) => console.log("connection error", err));

  app.use('/', router)
  console.log("established connection")
});
