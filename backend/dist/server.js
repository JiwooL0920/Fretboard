import express from "express";
const app = express();
const port = 3000;
// app.get('/', (req: Request, res: Response):void => {
//     res.json({message: "Hello world"});
// })
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map