import prisma from "../DB/db.config.js";

export const allReplays = async (req, res) => {
  try {
    const replays = await prisma.replay.findMany({});
    await res
      .status(200)
      .json({
        status: 200,
        data: replays,
        message: "Here is all Comment Replays ",
      });
  } catch (error) {
    console.log(error);
  }
};

// Add New Replay
export const createReplay = async (req, res) => {
  const { user_Id, question_Id, comment_Id, replay } = req.body;
  try {
    const newReplay = await prisma.replay.create({
      data: {
        user_Id,
        question_Id,
        comment_Id,
        replay,
      },
    });

    await res.status(200).json({
      status: 200,
      data: newReplay,
      message: "Successfully added new replay !",
    });
  } catch (error) {
    console.log(error);
  }
};
