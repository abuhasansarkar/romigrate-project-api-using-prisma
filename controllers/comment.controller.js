import prisma from "../DB/db.config.js";

// Get All Post or Comment
export const getComment = async (req, res) => {
  try {
    const allQuestions = await prisma.comment.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
    await res.status(200).json({
      status: 200,
      data: allQuestions,
      message: "All Comment is Here !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Create new or Comment
export const createComment = async (req, res) => {
  const { user_Id, question_Id, comment } = req.body;

  // Increase Comments and Comment Counter
  await prisma.question.update({
    where: {
      id: Number(question_Id),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });

  try {
    const newComment = await prisma.comment.create({
      data: {
        user_Id,
        question_Id,
        comment,
      },
    });
    res.status(200).json({
      status: 200,
      data: newComment,
      message: "Successfully posted a new Comment !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Update Post or Comment

export const updateComment = async (req, res) => {
  const commentId = req.params.id;
  const { user_Id, question_Id, comment } = req.body;
  try {
    const updateQuestion = await prisma.comment.update({
      where: {
        id: Number(commentId),
      },
      data: {  comment },
    });

    await res.status(200).json({
      status: 200,
      data: updateQuestion,
      message: "Your Comment successfully Updated !",
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete Post or Comment

export const deleteComment = async (req, res) => {
  const commentId = req.params.id;

  //   Decriment Comment Number
  /*  await prisma.question.update({
      where: {
        id: Number(post_Id),
      },
      data: {
          comment_count: {
              decrement:1
          }
      },
    }); */

  try {
    await prisma.comment.delete({
      where: {
        id: Number(commentId),
      },
    });
    await res
      .status(200)
      .json({ status: 200, message: "your Comment Successfully Deleted !" });
  } catch (error) {
    console.log(error);
  }
};
