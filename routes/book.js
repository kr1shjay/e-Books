import { Router } from "express";
import * as bookControllers from "../controllers/book.js";

const router = Router();

router.get("/books", bookControllers.getAllBooks);
router.post("/books/byISBN/:ISBN", bookControllers.getBooksByISBN);
router.post("/books/byTitle/:title", bookControllers.getBooksByTitle);
router.post("/books/byAuthor/:author", bookControllers.getBooksByAuthor);
router.post("/books", bookControllers.addBook);



export default router;