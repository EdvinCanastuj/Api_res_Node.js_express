import { Router } from "express";
import { methods as studentController } from "./../controllers/student.controllers";

const router=Router();
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudent);
router.post("/", studentController.addStudents);
router.delete("/:id", studentController.deleteStudents);
router.put("/:id", studentController.updateStudents);
export default router;