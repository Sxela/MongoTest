import {Request, Response} from 'express'

import Book from './../Book'

export let allBooks = (req:Request, res:Response) => 
{
    let books = Book.find((err:any, books:any) =>
    {
        if (err) 
        {res.send('Error!');}
        else
        {res.send(books);}
    })
}

export let getBook = (req:Request, res:Response) => 
{
    let book = Book.findById(req.params.id, (err:any, books:any) =>
    {
        if (err) 
        {res.send('Error!');}
        else
        {res.send(book);}
    })
}

export let deleteBook = (req:Request, res:Response) => 
{
    let books = Book.deleteOne({_id:req.params.id}, (err:any) =>
    {
        if (err) 
        {res.send('Error!');}
        else
        {res.send('Book successfully deleted!');}
    })
}

export let updateBook = (req:Request, res:Response) => 
{
    console.log(req.body);
    let books = Book.findByIdAndUpdate(req.params.id, req.body, (err:any, books:any) =>
    {
        if (err) 
        {res.send('Error!');}
        else
        {res.send('Book successfully updated!');}
    })
}

export let addBook = (req:Request, res:Response) => 
{
    var book = new Book(req.body);
    book.save((err:any, books:any) =>
    {
        if (err) 
        {res.send('Error!');}
        else
        {res.send(book);}
    })
}