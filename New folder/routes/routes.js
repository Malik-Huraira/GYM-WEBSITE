import express from "express";
import { applyJobController } from "../controller/applyJobController.js";
import { categoryController } from "../controller/categoryController.js";
import { authUser, registerUser } from "../controller/controller.js";
import { deleteSingleJobController } from "../controller/deleteSingleJobController.js";
import { editSingleJobController } from "../controller/editSingleJobController.js";
import { getJobsController } from "../controller/getJobsController.js";
import { getSingleUserController } from "../controller/getSingleUserController.js";
import { jobDataController } from "../controller/jobDataController.js";
const router = express.Router();

router.post("/login", authUser);
router.post("/signup", registerUser);
router.post("/admin/addNewJob", jobDataController);
router.post("/admin/addNewCat", categoryController);
router.get("/admin/jobsList", getJobsController);




router.get("/admin/edit/:id", getSingleUserController);
router.put("/admin/edit/:id", editSingleJobController);
router.delete("/admin/edit/:id", deleteSingleJobController);


router.post("/applyForJob/", applyJobController);
export default router;