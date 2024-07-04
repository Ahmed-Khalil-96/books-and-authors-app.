import authorModel from "../../../DB/Models/author.model.js";



// ============================q.6==================================
export const addAuthor = async(req, res, next)=>{

    const {name , bio , birthDate, books}= req.body
    try{

        const author = await authorModel.create({name, bio , birthDate , books})
       return res.status(201).json({message:"Author added successfully" , author})
} 
catch(err){
    return res.status(500).json({message:"Something went wrong" , err})
    } 
}




// ============================q.7============================

export const getAllAuthors=async(req, res, next)=>{

    const {page, limit}= req.query
    const skip = (page-1)*limit
    try{
    const authors= await authorModel.find().limit(limit).skip(skip)
    return res.status(200).json({message:"Authors fetched successfully" , authors})
}
catch(err){
    return res.status(500).json({message:"Something went wrong" , err})
    }
    }

 // ============================q.8===========================
export const getAuthorById = async(req, res, next)=>{
    const {id} = req.params
    try{
    const author = await authorModel.findById(id).populate({
        path:"books" ,
        select:"title content publishedDate -_id"
    })

    if(!author){
        return res.status(404).json({message:"Author not found" })

    }
    return res.status(200).json({msg:"done", author})
}
catch(err){
    return res.status(500).json({message:"Something went wrong" , err})
    }
    }


// ============================q.9===============

export const updateAuthor = async(req, res, next)=>{
    const {id}= req.params
    const {name , bio, birthDate, books}= req.body
    try{
    const author = await authorModel.findByIdAndUpdate({_id:id},{name , bio, birthDate, books},{new:true})

    if(!author){
        return res.status(404).json({message:"Author not found" })
    }
    return res.status(200).json({message:"Author updated successfully" , author})
}
catch(err){
    return res.status(500).json({message:"Something went wrong" , err})
    }
    }

 // ============================q.10===============
export const deleteAuthor = async(req, res, next )=>{
    const {id}= req.params
    try{
        const author = await authorModel.findByIdAndDelete(id)
        if(!author){
            return res.status(404).json({message:"Author not found" })
            }
            return res.status(200).json({msg:"done"})
}
catch(err){
    return res.status(500).json({message:"Something went wrong" , err})
    }
    }


    // =================bonus task=======================

    export const searchAuthor= async(req,res, next)=>{
        const{name, bio}=req.body
        const author= await authorModel.findOne({$or:[{name},{bio}]}).populate({
            path:"books" ,
            select:"title content publishedDate -_id"
        })
        if(!author){
            return res.status(404).json({message:"Author not found" })
            
            }
            return res.status(200).json({msg:"done", author})
    }
