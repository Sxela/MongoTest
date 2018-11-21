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