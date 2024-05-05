import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { IUser } from "./interfaces";
import {summary} from "./services/summary";

const app = express();
app.use(bodyParser.json());

app.get('/users', async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get<{users: IUser[]}>("https://dummyjson.com/users");
    res.json({ data });
  } catch (error) {
    console.error(error)
    res.status(500).send({message: 'Something went wrong'})
  }
});

app.get('/users/summary', async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get<{users: IUser[]}>("https://dummyjson.com/users");
    const { byDepartments } = summary(data.users);

    res.json({ data: byDepartments() });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

export default app;
