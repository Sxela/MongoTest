import { Request, Response } from 'express'

export let allBooks = (req: Request, res: Response) => 
{
    res.send('Return all Books');
}

export let getBook = (req: Request, res: Response) => 
{
    res.send('Return one Book');
}

export let deleteBook = (req: Request, res: Response) => 
{
    res.send('Return one Book');
}

export let updateBook = (req: Request, res: Response) => 
{
    res.send('Return one Book');
}

export let addBook = (req: Request, res: Response) => 
{
    res.send('Return one Book');
}

import * as mongoose from 'mongoose';

const uri: string = 'mongodb://data:27017/local';

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Succesfully Connected!")
    }
});

export interface IBook extends mongoose.Document {
    title: string;
    author: number;
};

export const BookSchema = new mongoose.Schema ({
    title:{type:String, required : true},
    author:{type:String, required: true},
});

const Book = mongoose.model('Book',BookSchema);
export default Book;

