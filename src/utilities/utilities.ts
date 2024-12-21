import { randomBytes } from "crypto";
import { ResponseInterface } from "../interfaces/interfaces";
import multer, { diskStorage } from 'multer';

export function getUuid() {
  return randomBytes(16).toString("hex");
}


export const buildResponse = (
  data: any,
  isEmpty: boolean,
  message: string
): ResponseInterface => {
  if (isEmpty) return { results: [], message: message };
  else return { results: data, message: message };
};

export const sendError = (error: any) => {
  return buildResponse([], true, JSON.stringify(error));
};

export const multerInit = () =>  {
  const whitelist = [
    'activity/png',
    'activity/jpeg',
    'activity/jpg',
    'activity/webp'
  ];
  return multer({
    storage: multer.diskStorage({
      destination: 'src/public/activitys/',
      filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}-${file.originalname}`)
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!whitelist.includes(file.mimetype)) {
        return cb(new Error('file is not allowed'))
      }
      cb(null, true)
    }
  })
}



