import { Router } from "express";
import * as AC from "./author.controller.js";
const router = Router()

router.post("/",AC.addAuthor)
router.get("/", AC.getAllAuthors)
router.get("/author/:id", AC.getAuthorById)
router.patch("/:id", AC.updateAuthor)
router.delete("/:id", AC.deleteAuthor)
router.get("/author", AC.searchAuthor )
export default router