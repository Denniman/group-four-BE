import Dishes from '../models/ProductModel.js';

export const getDishes = async (req, res) => {
  try {
    let allDishes = await Dishes.find({}).exec();
    res.send({ data: allDishes }).end();
  } catch (err) {
    console.log(err);
  }
};

export const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const Dish = req.body;
    const update = await Dishes.findOneAndUpdate({ _id: id }, Dish, {
      new: true,
    });
    res.send({ data: update }).end();
  } catch (err) {
    console.log(err);
  }
};

export const postDish = async (req, res) => {
  try {
    let newDish = req.body;
    await Dishes.create(newDish);
    res.send(`Created new Dish`).end();
  } catch (err) {
    console.log(err);
  }
};

export const getDisheseBySchema = async (req, res) => {
  // try {
  //   const { id } = req.params;

  //   const getOneDish = await Dishes.findById(id).exec();
  //   res.send({
  //     data: getOneDish,
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  const { type, value } = req.query;
  console.log(type, value);
  const getMultipleDishes = await Dishes.find({ [type]: value })
    .lean()
    .exec();
  res.send({
    data: getMultipleDishes,
  });
};

export const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    await Dishes.findByIdAndDelete(id).exec();
    res.send({
      status: 'success',
      message: `Deleted Dish with the title ${title}`,
    });
  } catch (err) {
    console.log(err);
  }
};
