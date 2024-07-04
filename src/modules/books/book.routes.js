import { Router } from "express";
import * as BC from "./books.controller.js";

const router = Router()
router.post("/",BC.addBook)
router.get("/",BC.getAllBooks)
router.get("/book/:id",BC.getBookById)
router.patch("/:id",BC.updateBook)
router.delete("/:id",BC.deleteBook)
router.get("/book", BC.searchBook)
export default router