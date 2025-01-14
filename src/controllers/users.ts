import { db } from "@/db/db";
import { TypedRequestBody, UserCreateProps, UserLoginProps } from "@/types/types";
import { Response } from "express";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken, TokenPayload } from "@/utils/tokens";

export async function createUserService(data: UserCreateProps) {
  const existingEmail = await db.user.findUnique({
    where:{
      email: data.email
    },
  });

  if (existingEmail) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const userData = { ...data, password: hashedPassword };

  const newUser = await db.user.create({
    data: userData,
  });

  console.log('User created successfully: ${newUser.name} (${newUser.id})');
  return newUser;
}

export async function createUser(req: TypedRequestBody<UserCreateProps>, res: Response) {
  const data = req.body;
  // const {email, password, role, name,phone,image, schoolId, schoolName} = data;

  try {
    

   const newUser = await createUserService(data);
    return res.status(201).json({
      data: newUser,
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

// login
export async function loginUser(req: TypedRequestBody<UserLoginProps>, res: Response) {
  const data = req.body;
  const {email, password} = data;

  try {
    // Check if the user already exists\
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!existingUser) {
      return res.status(409).json({
        data: null,
        error: "Invalid Credentials",
      });
    }

    //Verify password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if(!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid credentials",
        data: null,
      });
    }

    const tokenPayload: TokenPayload = {
      userId: existingUser.id,
      email: existingUser.email,
      role:  existingUser.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    // Store refresh token in database
    await db.refreshToken.create({
      data: {
        token: refreshToken,
        userId: existingUser.id,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    });
 

    // Remove sensitive data
    const { password: _, ...userWithoutPassword } = existingUser;
 
    return res.status(201).json({
      data: {
        user: userWithoutPassword,
        accessToken,
        refreshToken,
      },
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

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select:{
        id:true,
        email:true,
        name:true,
        phone:true,
      }
    });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch Users",
    })
  }
}

// export async function getContacts(req: Request, res: Response) {
//   try {
//     const contacts = await db.contact.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return res.status(200).json(contacts);
//   } catch (error) {
//     console.log(error);
//   }
// }
