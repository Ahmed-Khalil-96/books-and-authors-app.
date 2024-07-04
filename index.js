import express from 'express'
import connection from './DB/connectionDB.js'
import bookRouter from './src/modules/books/book.routes.js'
import authorRouter from './src/modules/author/author.routes.js'
const app = express()
const port = 3000
app.use(express.json())

app.use("/book",bookRouter)
app.use("/author", authorRouter)

connection()
app.use('*', (req, res) => res.status(404).json({msg:"404 page is not found"}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))