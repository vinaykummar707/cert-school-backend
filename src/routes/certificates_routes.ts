import { Router } from "express";
import { CertificateController } from "../controllers/certificate_controller";

export const certificateRouter = Router();
const certificateController = new CertificateController();

certificateRouter.get("/all/:schoolId", certificateController.getAllCertificates);
certificateRouter.post("/create", certificateController.createCertificate);
certificateRouter.get("/:id", certificateController.getCertificateById);
certificateRouter.delete("/delete/:id", certificateController.deleteCertificateById);
certificateRouter.put("/update", certificateController.updateCertificateById);
