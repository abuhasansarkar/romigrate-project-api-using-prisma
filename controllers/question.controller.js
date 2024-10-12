import prisma from "../DB/db.config.js";

// Get All Post or Questions
export const getQuestions = async (req, res) => {
  try {
    const allQuestions = await prisma.question.findMany({
      include: {
        Comment: true,
      },
    });
    await res.status(200).json({
      status: 200,
      data: allQuestions,
      message: "All Questions is Here !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Create Post or Question
export const createQuestion = async (req, res) => {
  const { user_Id, title, subCategory, body } = req.body;

  try {
    const newQuestion = await prisma.question.create({
      data: {
        user_Id,
        title,
        subCategory,
        body,
      },
    });
    res.status(200).json({
      status: 200,
      data: newQuestion,
      message: "Successfully posted a new Question !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Update Post or Quesiton

export const updateQuestion = async (req, res) => {
  const postId = req.params.id;
  const { title, body, subCategory } = req.body;
  try {
    const updateQuestion = await prisma.question.update({
      where: {
        id: Number(postId),
      },
      data: {
        title,
        subCategory,
        body,
      },
    });

    await res.status(200).json({
      status: 200,
      data: updateQuestion,
      message: "Question Information successfully Updated !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Single Post or Question

export const singleQuestion = async (req, res) => {
  const postId = req.params.id;
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: Number(postId),
      },
      
    });
    await res.status(200).json({
      status: 200,
      data: question,
      message: "Single Question Successfully Collected !",
    });
  } catch (error) {
    console.log(error);
  }
};
// Delete Post or Question

export const deleteQuestion = async (req, res) => {
  const postId = req.params.id;
  try {
    await prisma.question.delete({
      where: {
        id: Number(postId),
      },
    });
    await res
      .status(200)
      .json({ status: 200, message: "This Question Successfully Deleted !" });
  } catch (error) {
    console.log(error);
  }
};
