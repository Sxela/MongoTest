import * as express from 'express';
//import * as book from './book';
import * as bookController from './controllers/bookController';
import * as bodyParser from 'body-parser';

// Our Express APP config
const app = express();
//app.set("port", process.env.PORT || 3000);
app.set("port", 3000);

app.use(bodyParser.json());

// API Endpoints
//app.get('/', book.allBooks);
app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.put('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.post('/book/:id', bookController.updateBook);


//app.get('/{id}', book.getBook);
//app.post('/', book.addBook);
//app.put('/{id}', book.updateBook);
//app.delete('/{id}', book.deleteBook);


const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});