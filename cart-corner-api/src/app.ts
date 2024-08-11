import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";
import routes from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import path from 'path'
const app:Application = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());


//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Serve static files from the 'upload' directory
app.use('/uploads', express.static(path.join(__dirname, 'upload')));

app.use("/api/v1", routes);

//global error handler
app.use(globalErrorHandler);

//handle not found
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "Not Found",
//     errorMessages: [
//       {
//         path: req.originalUrl,
//         message: "API Not Found",
//       },
//     ],
//   });
//   next();
// });
export default app;
