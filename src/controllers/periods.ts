import { db } from "@/db/db";
import { PeriodCreateProps, TypedRequestBody } from "@/types/types";
import { Response } from "express";

export async function createPeriod(req: TypedRequestBody<PeriodCreateProps>, res: Response) {
  const data = req.body;
  try {
    
    const newTerm = await db.period.create({
      data,
    });
    console.log(
      `Term created successfully: ${newTerm.term} (${newTerm.id})`
    );
    return res.status(201).json({
      data: newTerm,
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      error: "Something went wrong",
    });
  }
}
// export async function getDepartments(req: Request, res: Response) {
//   try {
//     const departments = await db.department.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//        teachers : true,
//        subjects : true
//       }
//     });
//     return res.status(200).json(departments);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       error: "Failed to fetch departments",
//     })
//   }
// }
