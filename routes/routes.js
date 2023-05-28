

import express from "express";
import { AddingProducts } from "../controller/AddProducts.js";
import { editSingleProductController } from "../controller/editProductController.js";
import { editSignup } from "../controller/editSignup.js";
import { getSingleProductController } from "../controller/getSingleProduct.js";
import { signUpCustomerList, getCustomerList, getProductList } from "../controller/Signup.js";
import { getSignup } from "../controller/getSignup.js";
import { deleteProductController } from "../controller/deleteProductController.js";
import { deleteSignup } from "../controller/deleteSignup.js";
const router = express.Router();

router.post("/admin/addNewProduct", AddingProducts);
router.patch("/admin/addNewProduct/:id", AddingProducts);
router.get("/admin/dashboard", getCustomerList);
router.get("/admin/allProducts", getProductList);
router.delete("/admin/allProducts/:id", deleteProductController);
router.post("/Signup", signUpCustomerList);
router.get("/admin/allProducts/:id", getSingleProductController);
router.put("/admin/allProducts/:id", editSingleProductController);

router.get("/admin/dashboard/:id", getSignup);
router.put("/admin/dashboard/:id", editSignup);
router.delete("/admin/dashboard/:id", deleteSignup);
router.patch("/admin/signup/:id", signUpCustomerList);
export default router;