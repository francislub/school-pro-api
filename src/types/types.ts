import { Request, Response } from 'express';
import { Gender, PaymentStatus, SubjectCategory, SubjectType, UserRole } from '@prisma/client';
export interface TypedRequestBody<T> extends Request {
    body: T;
}
export type ContactProps = {
    fullname: string;
    email: string;
    phone: string;
    school: string;
    country: string;
    schoolPage: string;
    students: number;
    role: string;
    media: string;
    message: string;
  };

  export type UserCreateProps = {
    email: string;
    password: string;
    role: UserRole;
    name: string;
    phone?: string;
    image?: string;
    schoolId?: string;
    schoolName?: string;
  };

  export type UserLoginProps = {
    email: string;
    password: string;
  };

  export type ClassCreateProps ={
    title: string;
    slug: string;
    schoolId: string;
  };

  export type DepartmentCreateProps ={
    name: string;
    slug: string;
    schoolId: string;
  };
  export type PeriodCreateProps ={
    year: number;
    term: number;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    schoolId: string;
  };
  interface FeeEntry {
    title: string;
    amount: number;
  }

  export type SchoolFeeProps ={
    term:string;
    title:string;
    year: number;
    fees :FeeEntry[];
    schoolId:string;
    classId:string;
    periodId:string;
    schoolName:string;
    className:string;
  };

  export type SubjectCreateProps ={
    name: string;
    slug: string;
    code: string;
    shortName: string;
    category: SubjectCategory;
    type: SubjectType;
    departmentId: string;
    departmentName: string;
    schoolId: string;
  };

  export type StreamCreateProps ={
    title: string;
    slug: string;
    classId: string;
    schoolId:string;
  }
  export type ParentCreateProps = {
    title:string;
    firstName:string,
    lastName:string,
    relationship:string,
    email:string,
    NIN:string,
    gender:string,
    dob:string,
    phone:string,
    nationality:string,
    whatsapNo:string,
    contactMethod:string,
    occupation:string,
    address:string,
    password:string,
    imageUrl:string,
    schoolId:string;
    schoolName:string;
    userId:string;
  };

  export type StudentCreateProps = {
    name:string;
    firstName:string;
    lastName:string;
    email:string;
    parentId:string;
    classId:string;
    streamId:string;
    parentName?:string;
    classTitle?:string;
    streamTitle?:string;
    password:string;
    imageUrl:string;
    phone:string;
    state:string;
    BCN:string;
    religion:string;
    gender:string;
    nationality:string;
    dob:string;
    rollNo:string;
    regNo:string;
    admissionDate:string;
    address:string;
    schoolId:string;
    schoolName:string;
    userId:string;
  };

  export type TeacherCreateProps = {
    title:string;
    employeeId:string;
    firstName:string,
    lastName:string,
    phone:string,
    email:string,
    whatsappNo:string,
    nationality:string,
    NIN:string,
    gender:Gender,
    dateOfBirth:string,
    contactMethod:string,
    password:string,
    dateOfJoining:string,
    designation:string,
    departmentId:string,
    departmentName:string,
    qualification:string,
    mainSubject:string,
    mainSubjectId:string,
    subjects:string[],
    classIds:string[],
    classes:string[],
    experience:number,
    address:string,
    imageUrl:string,
    schoolId:string;
    schoolName:string;
    userId:string;
  }

  export interface Teacher {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    title: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    nationality: string;
    imageUrl: string;
    NIN: string;
    bio?: string | null;

    email: string;
    phone: string;
    whatsappNo: string;
    address: string;
    contactMethod: string;

    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;

    dateOfJoining: Date;
    designation: string;
    departmentName: string;
    departmentId: string;
    isActive: boolean;
    lastLogin: string | null;
    password: string;

    qualification: string;
    experience: number;
    skills?: string[] | null;
    mainSubject: string;
    mainSubjectId: string;
    subjects: string[];

    classes: string[];
    classIds: string[];


  }

  export interface CreateSchoolFeePaymentInput{
    schoolName: string;
    schoolId: string;
    periodId:string;
    schoolFeeId:string;
    studentProfileId: string;
    studentUserId: string;
    studentName: string;
    parentName: string;
    parentProfileId: string;
    parentUserId: string;
    schoolFeeTitle: string;
    paidFeeAmount: number;
    paidFees: string[];
    PRN: string;
    term: string;
    year: number;
    className: string;
    paymentStatus: PaymentStatus;
  }