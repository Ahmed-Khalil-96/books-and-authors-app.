import bookModel from "../../../DB/Models/book.model.js";


// =================q.1===================

export const addBook = async(req, res, next)=>{

        const {title , author , content}= req.body

        const isBookExist= await bookModel.findOne({title})
        if(isBookExist){
            return res.status(409).json({msg:"the book already exists"})
        }
        const book =await bookModel.create({title,author,content})
        return res.status(201).json({msg:"done",book})
        
    
}


// =================q.2===================

export const getAllBooks = async(req, res, next)=>{

    const{limit , page}= req.query
    const skip = (page-1)*limit
    const books = await bookModel.find().limit(limit).skip(skip)
    if(books.length==0){
        return res.status(404).json({msg:"no books found"})
    }
    return res.status(200).json({msg:"done", books})
}

// =================q.3===================
export const getBookById = async(req, res, next)=>{
    const {id}=req.params
    const book = await bookModel.findById(id)
    if(!book){
        return res.status(404).json({msg:"No books found"})
    
    }
    return res.status(200).json({msg:"done", book})
}

// =================q.4===================
export const updateBook = async(req, res, next)=>{
    const {id}=req.params
    const {title , author , content}= req.body
  const book = await bookModel.findOneAndUpdate({_id:id},{title, author, content},{new:true})
  if(!book){
    return res.status(404).json({msg:"No books found"})
 }
 return res.status(200).json({msg:"done", book})
}

// =================q.5===================
export const deleteBook = async(req, res, next)=>{
    const {id}= req.params
    const book = await bookModel.findByIdAndDelete(id)
    if(!book){
        return res.status(404).json({msg:"No books found"})
        }
        return res.status(200).json({msg:"done", book})
}

// ===============bonus task================

export const searchBook= async(req,res, next)=>{
    const {title , author}= req.body
    const books = await bookModel.find({$or:[{title},{author}]})
    if(books.length==0){
        return res.status(404).json({msg:"No books found"})

    }
    return res.status(200).json({msg:"done", books})
}