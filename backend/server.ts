import express, {Request, Response} from "express";
const app = express();
const port = 3000;

// app.get('/', (req: Request, res: Response):void => {
//     res.json({message: "Hello world"});
// })

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });

app.listen(port, ():void => {
    return console.log(`Express is listening at http://localhost:${port}`);
})