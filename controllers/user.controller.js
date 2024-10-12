import bcryptjs from "bcryptjs";
import prisma from "../DB/db.config.js";

// Get all user Data
export const getAllUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        image: true,
        travelingFrom: true,
        travelingTo: true,
        created_at: true,
      },
    });

    await res
      .status(200)
      .json({ status: 200, data: users, message: " All User Data is Here " });
  } catch (error) {
    console.log(error);
  }
};
// Get Single user Data
export const getSingleUser = async (req, res) => {
  const userName = req.params.username;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: userName,
      },

      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        image: true,
        travelingFrom: true,
        travelingTo: true,
        created_at: true,
      },
    });

    await res
      .status(200)
      .json({ status: 200, data: user, message: " User Data is Here " });
  } catch (error) {
    console.log(error);
  }
};

// Create User
export const createUser = async (req, res) => {
  const { name, username, email, image, travelingFrom, travelingTo, password } =
    req.body;

  // Check Username and Email already have in database ?
  const findEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  const findUsername = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  //   Password Hash
  const salt = bcryptjs.genSaltSync(10);

  const hashPassword = bcryptjs.hashSync(password, salt);

  try {
    if (findEmail) {
      return res
        .status(400)
        .json({ message: "This Email already Exits !", status: 400 });
    }
    if (findUsername) {
      return res
        .status(400)
        .json({ message: "This Username already Taken !", status: 400 });
    }
    // Create a New user
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        image,
        travelingFrom,
        travelingTo,
        password: hashPassword,
      },
    });

    await res.status(200).json({
      status: 200,
      data: newUser,
      message: "User created Successfully !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Update User

export const updateUser = async (req, res) => {
  const userName = req.params.username;
  console.log(userName);
  const { name, image, travelingFrom, travelingTo } = req.body;

  try {
    // User Info Updated
    const UpdatedUser = await prisma.user.update({
      where: {
        username: userName,
      },
      data: {
        name,
        image,
        travelingFrom,
        travelingTo,
      },
    });

    await res.status(200).json({
      sttus: 200,
      data: UpdatedUser,
      message: "This User Informaiton successfully Updated !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete User

export const deleteUser = async (req, res) => {
  const userName = req.params.username;
  try {
    await prisma.user.delete({
      where: {
        username: userName,
      },
    });
    await res
      .status(200)
      .json({ status: 200, message: `${userName} Successfully Deleted !` });
  } catch (error) {
    console.log(error);
  }
};
