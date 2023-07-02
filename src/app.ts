import express from "express";
import "express-async-errors";
import "reflect-metadata";
import userRoutes from "./routers/users.routes";
import sessionRoutes from "./routers/session.routes";
import handleError from "./errors/handleError";
import shedeulesRoute from "./routers/shedeuls.routes";
import propertiesRoutes from "./routers/properties.routes";
import categoriesRoutes from "./routers/categories.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/schedules", shedeulesRoute);
app.use("/properties", propertiesRoutes);
app.use("/categories", categoriesRoutes);

app.use(handleError);

export default app;
