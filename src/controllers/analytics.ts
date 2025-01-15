import { db } from "@/db/db";
import { ContactProps, TypedRequestBody } from "@/types/types";
import { Request, Response } from "express";


export async function getAnalyticsBySchoolId(req: Request, res: Response) {
  try {
    const {schoolId} = req.params

    const students = await db.user.count({
      where: {
        schoolId,
        role: "STUDENT"
      }
    });
    const teachers = await db.user.count({
      where: {
        schoolId,
        role: "TEACHER"
      }
    });

    const parents = await db.user.count({
      where: {
        schoolId,
        role: "PARENT"
      }
    });

    const classes = await db.class.count({
      where: {
        schoolId,
      }
    });

    const result = [
      {
       title: "Students",
       count: students,
      },
      {
        title: "Teachers",
        count: teachers,
      },
      {
        title: "Parents",
        count: parents,
      },
      {
        title: "Classes",
        count: classes,
      },
    ];

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}
