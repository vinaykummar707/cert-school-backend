import {Router} from "express";
import { studentRouter } from "./student_routes";
import { activityRouter } from "./activity_routes";
import { roleRouter } from "./role_routes";
import { userRouter } from "./user_routes";
import { certificateRouter } from "./certificates_routes";
import { readFile, writeFile } from "fs/promises";
import { DbConnection } from "../connections/db_connection";
export const router = Router();



router.use('/student', studentRouter);
router.use('/activity', activityRouter);
router.use('/user', userRouter);
router.use('/role', roleRouter);
router.use('/certificate', certificateRouter);
router.get('/config',async (req,res) => {
    const data = await readFile("./config.json",'utf-8');
    res.json(JSON.parse(data));
})

router.post('/config',async (req,res) => {
    const data = await writeFile('./config.json' ,JSON.stringify(req.body),'utf-8');
    res.json(data);
})

router.get('/top-students/:edu/:year',async (req,res) => {
    const sequelize = DbConnection.getSequelize;
    const da: any =await sequelize.query('exec GetTopStudentInfo :EduPassed, :yearPassed',
        { replacements: { EduPassed: req.params.edu, yearPassed: parseInt(req.params.year)},
          raw: true }
      )
      res.json(da);
})

router.get('/eduPassed',async (req,res) => {
    const sequelize = DbConnection.getSequelize;
    const da: any =await sequelize.query('exec GetEducationPassed',
        {raw: true }
      )
      res.json(da);
})

router.get('/eduStream',async (req,res) => {
    const sequelize = DbConnection.getSequelize;
    const da: any =await sequelize.query('exec GetEducationStream',
        {raw: true }
      )
      res.json(da);
})