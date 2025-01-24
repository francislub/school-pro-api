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
      data: newPayment.PRN,
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

export async function getPaymentsByYear(req: Request, res: Response) {
  const cyear = new Date().getFullYear()
  try {
    const { schoolId } = req.params;
  const payments = await db.schoolFeePayment.findMany({
    where:{
      schoolId,
      year:cyear,
    },
    orderBy: [
      {year: 'desc'},
      {term: 'asc'},
    ],
    select:{
      id:true,
      studentUserId: true,
      schoolName:true,
      paidFeeAmount: true,
      paidFees:true,
      PRN:true,
      paymentStatus:true,
      term:true,
      year:true,
      className:true,
    }
  });

  return res.status(201).json({
    data: payments,
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
