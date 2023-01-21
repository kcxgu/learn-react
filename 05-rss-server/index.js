import cors from "cors";
import express from "express";

let app = express();

const server = app.listen("4000", () => {
    console.log(`App is listening at http://localhost:4000`);
});

export default server;