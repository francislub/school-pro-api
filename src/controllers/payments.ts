import { db } from "@/db/db";
import { CreateSchoolFeePaymentInput, PeriodCreateProps, TypedRequestBody } from "@/types/types";
import { Request, Response } from "express";
import { groupBy } from "lodash";

export async function createFeePayment(req: TypedRequestBody<CreateSchoolFeePaymentInput>, res: Response) {
  const data = req.body;
  try {
    
    const newPayment = await db.schoolFeePayment.create({
      data,
    });
    console.log(
      `Payment created successfully: ${newPayment.PRN} (${newPayment.studentName})`
    );
    return res.status(201).json({
      data: newPayment,
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

export async function getPeriodsByYear(req: Request, res: Response) {
  try {
    const { schoolId } = req.params;
  const periods = await db.period.findMany({
    where:{
      schoolId,
    },
    orderBy: [
      {year: 'desc'},
      {term: 'asc'},
    ],
  });

  return res.status(201).json({
    data: periods,
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
