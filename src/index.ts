import * as express from 'express';
import * as mongoose from 'mongoose';
import * as book from './book';

const uri: string = 'mongodb://database:27017/local';
//mongoose.connect("mongodb://172.17.0.3:27017/local", { useNewUrlParser: true });

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Succesfully Connected!")
    }
});


// Our Express APP config
const app = express();
//app.set("port", process.env.PORT || 3000);
app.set("port", 3000);

// API Endpoints
app.get('/', book.allBooks);
app.get('/{id}', book.getBook);
app.post('/', book.addBook);
app.put('/', book.updateBook);
app.delete('/', book.deleteBook);


const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"))
});